package com.pathotest.wellnesspackage.service;

import com.pathotest.wellnesspackage.dto.WellnessPackageResponse;
import com.pathotest.wellnesspackage.entity.WellnessPackage;
import com.pathotest.wellnesspackage.repository.WellnessPackageRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class WellnessPackageService {

    private final WellnessPackageRepository repository;

    public WellnessPackageService(WellnessPackageRepository repository) {
        this.repository = repository;
    }

    public List<WellnessPackageResponse> getActivePackages() {
        return repository.findByIsActiveTrueOrderByCreatedAtDesc()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private WellnessPackageResponse toResponse(WellnessPackage item) {
        return new WellnessPackageResponse(
                item.getId(),
                item.getName(),
                item.getOriginalPrice(),
                item.getDiscountPrice(),
                item.getProfilesCount(),
                item.getTestsCount(),
                item.getParametersCount(),
                item.getGender()
        );
    }
}
