package com.pathotest.location.controller;

import com.pathotest.common.api.ApiResponse;
import com.pathotest.location.dto.LocationResponse;
import com.pathotest.location.service.LocationService;
import jakarta.validation.constraints.NotBlank;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("/api/locations")
public class LocationController {

    private final LocationService service;

    public LocationController(LocationService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<LocationResponse>>> getLocations(
            @RequestParam @NotBlank(message = "city query param is required") String city
    ) {
        return ResponseEntity.ok(ApiResponse.success(service.getByCity(city), "Locations fetched successfully"));
    }
}
