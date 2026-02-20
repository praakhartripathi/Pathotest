package com.pathotest.labtest.service;

import com.pathotest.labtest.dto.LabTestResponse;
import com.pathotest.labtest.entity.LabTest;
import com.pathotest.labtest.repository.LabTestRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class LabTestService {

    private final LabTestRepository repository;

    public LabTestService(LabTestRepository repository) {
        this.repository = repository;
    }

    public List<LabTestResponse> getActiveTests() {
        return repository.findByIsActiveTrueOrderByCreatedAtDesc()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private LabTestResponse toResponse(LabTest item) {
        return new LabTestResponse(
                item.getId(),
                item.getCode(),
                item.getName(),
                item.getDescription(),
                item.getPrice(),
                item.getDurationHrs()
        );
    }
}
