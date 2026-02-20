package com.pathotest.auth.dto;

public record AuthResponse(
        String token,
        String mobile,
        Long userId,
        boolean newUser
) {}
