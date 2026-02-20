package com.pathotest.location.service;

import com.pathotest.location.dto.LocationResponse;
import com.pathotest.location.entity.Lab;
import com.pathotest.location.repository.LabRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    private final LabRepository repository;

    public LocationService(LabRepository repository) {
        this.repository = repository;
    }

    public List<LocationResponse> getByCity(String city) {
        return repository.findActiveLabsByCity(city)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private LocationResponse toResponse(Lab lab) {
        return new LocationResponse(
                lab.getArea().getCity().getName(),
                lab.getArea().getName(),
                lab.getName(),
                lab.getAddress()
        );
    }
}
