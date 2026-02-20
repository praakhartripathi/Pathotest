package com.pathotest.labtest.controller;

import com.pathotest.common.api.ApiResponse;
import com.pathotest.labtest.dto.LabTestResponse;
import com.pathotest.labtest.service.LabTestService;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tests")
public class LabTestController {

    private final LabTestService service;

    public LabTestController(LabTestService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<LabTestResponse>>> getTests() {
        return ResponseEntity.ok(ApiResponse.success(service.getActiveTests(), "Tests fetched successfully"));
    }
}
