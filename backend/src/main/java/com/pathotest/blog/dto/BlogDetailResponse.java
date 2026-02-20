package com.pathotest.blog.dto;

import java.time.LocalDateTime;

public record BlogDetailResponse(Long id, String title, String slug, String summary, String content, LocalDateTime publishedAt) {
}
