package com.pathotest.auth.controller;

import com.pathotest.auth.dto.AuthResponse;
import com.pathotest.auth.dto.GenerateOtpRequest;
import com.pathotest.auth.dto.VerifyOtpRequest;
import com.pathotest.auth.service.AuthService;
import com.pathotest.common.api.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Auth", description = "OTP-based authentication")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /**
     * POST /api/auth/generate-otp
     * Generates and dispatches a 6-digit OTP to the given mobile number.
     */
    @Operation(summary = "Generate OTP", description = "Send a 6-digit OTP to the provided mobile number")
    @PostMapping("/generate-otp")
    public ResponseEntity<ApiResponse<Void>> generateOtp(
            @Valid @RequestBody GenerateOtpRequest request) {

        authService.generateOtp(request.mobile());
        return ResponseEntity.ok(
                ApiResponse.success(null, "OTP sent successfully to +91" + request.mobile()));
    }

    /**
     * POST /api/auth/verify-otp
     * Verifies the OTP and returns a JWT on success.
     */
    @Operation(summary = "Verify OTP", description = "Verify OTP and receive a JWT token")
    @PostMapping("/verify-otp")
    public ResponseEntity<ApiResponse<AuthResponse>> verifyOtp(
            @Valid @RequestBody VerifyOtpRequest request) {

        AuthResponse auth = authService.verifyOtp(request.mobile(), request.otp());
        return ResponseEntity.ok(
                ApiResponse.success(auth, auth.newUser() ? "Welcome to Pathotest!" : "Welcome back!"));
    }
}
