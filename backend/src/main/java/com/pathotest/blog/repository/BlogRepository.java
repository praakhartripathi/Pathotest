package com.pathotest.blog.repository;

import com.pathotest.blog.entity.Blog;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByIsPublishedTrueOrderByPublishedAtDesc();
    Optional<Blog> findBySlugAndIsPublishedTrue(String slug);
}
