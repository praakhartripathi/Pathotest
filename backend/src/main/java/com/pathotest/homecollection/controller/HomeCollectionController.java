package com.pathotest.homecollection.controller;

import com.pathotest.homecollection.dto.HomeCollectionRequest;
import com.pathotest.homecollection.dto.HomeCollectionResponse;
import com.pathotest.homecollection.entity.HomeCollection;
import com.pathotest.homecollection.service.HomeCollectionService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/home-collection")
@CrossOrigin(origins = "*")
public class HomeCollectionController {

    private final HomeCollectionService service;

    public HomeCollectionController(HomeCollectionService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<HomeCollectionResponse> create(@Valid @RequestBody HomeCollectionRequest request) {
        HomeCollection saved = service.save(request);
        return ResponseEntity.ok(new HomeCollectionResponse(
                "Home collection scheduled successfully",
                saved.getId()
        ));
    }
}
