package com.pathotest.auth.repository;

import com.pathotest.auth.entity.OtpRequest;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface OtpRequestRepository extends JpaRepository<OtpRequest, Long> {

    /** Latest unverified, non-expired OTP for a mobile number. */
    @Query("""
            SELECT o FROM OtpRequest o
            WHERE o.mobile = :mobile
              AND o.verified = false
              AND o.expiresAt > CURRENT_TIMESTAMP
            ORDER BY o.createdAt DESC
            LIMIT 1
            """)
    Optional<OtpRequest> findLatestValidOtp(@Param("mobile") String mobile);

    /** Invalidate all previous OTPs for a mobile before sending a new one. */
    @Modifying
    @Transactional
    @Query("UPDATE OtpRequest o SET o.verified = true WHERE o.mobile = :mobile AND o.verified = false")
    void invalidatePreviousOtps(@Param("mobile") String mobile);
}
