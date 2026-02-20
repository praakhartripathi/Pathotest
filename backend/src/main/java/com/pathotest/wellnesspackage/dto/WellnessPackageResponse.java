package com.pathotest.wellnesspackage.dto;

import java.math.BigDecimal;

public record WellnessPackageResponse(
        Long id,
        String name,
        BigDecimal originalPrice,
        BigDecimal discountPrice,
        Integer profilesCount,
        Integer testsCount,
        Integer parametersCount,
        String gender
) {
}
