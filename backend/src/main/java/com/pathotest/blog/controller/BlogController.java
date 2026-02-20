package com.pathotest.blog.controller;

import com.pathotest.blog.dto.BlogDetailResponse;
import com.pathotest.blog.dto.BlogSummaryResponse;
import com.pathotest.blog.service.BlogService;
import com.pathotest.common.api.ApiResponse;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/blogs")
public class BlogController {

    private final BlogService service;

    public BlogController(BlogService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<BlogSummaryResponse>>> getBlogs() {
        return ResponseEntity.ok(ApiResponse.success(service.getPublishedBlogs(), "Blogs fetched successfully"));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ApiResponse<BlogDetailResponse>> getBlogBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(ApiResponse.success(service.getBySlug(slug), "Blog fetched successfully"));
    }
}
