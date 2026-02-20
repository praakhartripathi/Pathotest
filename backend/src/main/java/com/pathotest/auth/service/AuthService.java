package com.pathotest.auth.service;

import com.pathotest.auth.dto.AuthResponse;
import com.pathotest.auth.entity.OtpRequest;
import com.pathotest.auth.entity.User;
import com.pathotest.auth.repository.OtpRequestRepository;
import com.pathotest.auth.repository.UserRepository;
import com.pathotest.auth.util.JwtUtil;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
    private static final int MAX_ATTEMPTS = 3;
    private static final SecureRandom RANDOM = new SecureRandom();

    private final OtpRequestRepository otpRepo;
    private final UserRepository userRepo;
    private final JwtUtil jwtUtil;

    @Value("${app.otp.expiry-minutes:5}")
    private int otpExpiryMinutes;

    public AuthService(OtpRequestRepository otpRepo,
                       UserRepository userRepo,
                       JwtUtil jwtUtil) {
        this.otpRepo  = otpRepo;
        this.userRepo = userRepo;
        this.jwtUtil  = jwtUtil;
    }

    // ─────────────────────────────────────────────────────────────────
    // Generate OTP
    // ─────────────────────────────────────────────────────────────────

    @Transactional
    public void generateOtp(String mobile) {
        // Invalidate any previous live OTPs for this number
        otpRepo.invalidatePreviousOtps(mobile);

        // Generate 6-digit OTP (zero-padded)
        String otp = String.format("%06d", RANDOM.nextInt(1_000_000));

        OtpRequest request = new OtpRequest();
        request.setMobile(mobile);
        request.setOtp(otp);
        request.setExpiresAt(LocalDateTime.now().plusMinutes(otpExpiryMinutes));
        otpRepo.save(request);

        // ── SMS integration point ──────────────────────────────────────
        // Replace this log statement with your SMS provider call, e.g.:
        //   smsService.send(mobile, "Your Pathotest OTP is " + otp);
        log.info("OTP for +91{} : {}", mobile, otp);
    }

    // ─────────────────────────────────────────────────────────────────
    // Verify OTP
    // ─────────────────────────────────────────────────────────────────

    @Transactional
    public AuthResponse verifyOtp(String mobile, String submittedOtp) {
        OtpRequest record = otpRepo.findLatestValidOtp(mobile)
                .orElseThrow(() -> new IllegalArgumentException(
                        "No valid OTP found. Please request a new OTP."));

        // Rate-limit: max 3 wrong attempts per OTP issuance
        if (record.getAttempts() >= MAX_ATTEMPTS) {
            throw new IllegalArgumentException("Too many incorrect attempts. Please request a new OTP.");
        }

        if (!record.getOtp().equals(submittedOtp)) {
            record.setAttempts((short) (record.getAttempts() + 1));
            otpRepo.save(record);
            int remaining = MAX_ATTEMPTS - record.getAttempts();
            throw new IllegalArgumentException(
                    "Incorrect OTP. " + remaining + " attempt" + (remaining == 1 ? "" : "s") + " remaining.");
        }

        // ── OTP matched — mark verified ────────────────────────────────
        record.setVerified(true);
        otpRepo.save(record);

        // Upsert user (create on first login, find on subsequent)
        boolean isNewUser = !userRepo.findByMobile(mobile).isPresent();
        User user = userRepo.findByMobile(mobile).orElseGet(() -> {
            User u = new User();
            u.setMobile(mobile);
            return userRepo.save(u);
        });

        String token = jwtUtil.generateToken(mobile, user.getId());

        return new AuthResponse(token, mobile, user.getId(), isNewUser);
    }
}
