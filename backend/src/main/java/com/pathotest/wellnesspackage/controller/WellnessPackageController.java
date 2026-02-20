package com.pathotest.wellnesspackage.controller;

import com.pathotest.common.api.ApiResponse;
import com.pathotest.wellnesspackage.dto.WellnessPackageResponse;
import com.pathotest.wellnesspackage.service.WellnessPackageService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/packages")
public class WellnessPackageController {

    private final WellnessPackageService service;

    public WellnessPackageController(WellnessPackageService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<WellnessPackageResponse>>> getPackages() {
        return ResponseEntity.ok(ApiResponse.success(service.getActivePackages(), "Packages fetched successfully"));
    }
}
