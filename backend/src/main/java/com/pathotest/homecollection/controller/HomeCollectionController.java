package com.pathotest.homecollection.controller;

import com.pathotest.common.api.ApiResponse;
import com.pathotest.homecollection.dto.HomeCollectionRequest;
import com.pathotest.homecollection.dto.HomeCollectionResponse;
import com.pathotest.homecollection.entity.HomeCollection;
import com.pathotest.homecollection.service.HomeCollectionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home-collection")
public class HomeCollectionController {

    private final HomeCollectionService service;

    public HomeCollectionController(HomeCollectionService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<HomeCollectionResponse>> create(@Valid @RequestBody HomeCollectionRequest request) {
        HomeCollection saved = service.save(request);
        HomeCollectionResponse response = new HomeCollectionResponse(saved.getId(), saved.getStatus().name());
        return ResponseEntity.ok(ApiResponse.success(response, "Home collection scheduled successfully"));
    }
}
