package com.pathotest.blog.dto;

import java.time.LocalDateTime;

public record BlogSummaryResponse(Long id, String title, String slug, String summary, LocalDateTime publishedAt) {
}
