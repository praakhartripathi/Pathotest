package com.pathotest.blog.service;

import com.pathotest.blog.dto.BlogDetailResponse;
import com.pathotest.blog.dto.BlogSummaryResponse;
import com.pathotest.blog.entity.Blog;
import com.pathotest.blog.repository.BlogRepository;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class BlogService {

    private final BlogRepository repository;

    public BlogService(BlogRepository repository) {
        this.repository = repository;
    }

    public List<BlogSummaryResponse> getPublishedBlogs() {
        return repository.findByIsPublishedTrueOrderByPublishedAtDesc()
                .stream()
                .map(this::toSummary)
                .toList();
    }

    public BlogDetailResponse getBySlug(String slug) {
        Blog blog = repository.findBySlugAndIsPublishedTrue(slug)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Blog not found"));
        return new BlogDetailResponse(
                blog.getId(),
                blog.getTitle(),
                blog.getSlug(),
                blog.getSummary(),
                blog.getContent(),
                blog.getPublishedAt()
        );
    }

    private BlogSummaryResponse toSummary(Blog blog) {
        return new BlogSummaryResponse(
                blog.getId(),
                blog.getTitle(),
                blog.getSlug(),
                blog.getSummary(),
                blog.getPublishedAt()
        );
    }
}
