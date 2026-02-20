package com.pathotest.labtest.dto;

import java.math.BigDecimal;

public record LabTestResponse(
        Long id,
        String code,
        String name,
        String description,
        BigDecimal price,
        Integer durationHours
) {
}
