package com.pathotest.homecollection.service;

import com.pathotest.homecollection.dto.HomeCollectionRequest;
import com.pathotest.homecollection.entity.HomeCollection;
import com.pathotest.homecollection.model.HomeCollectionStatus;
import com.pathotest.homecollection.repository.HomeCollectionRepository;
import java.util.Locale;
import java.util.Set;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class HomeCollectionService {

    private static final Set<String> UP_CITIES = Set.of(
            "LUCKNOW", "KANPUR", "AGRA", "VARANASI", "PRAYAGRAJ", "MEERUT",
            "GHAZIABAD", "NOIDA", "MATHURA", "BAREILLY", "GORAKHPUR", "JHANSI", "AYODHYA"
    );

    private final HomeCollectionRepository repository;

    public HomeCollectionService(HomeCollectionRepository repository) {
        this.repository = repository;
    }

    public HomeCollection save(HomeCollectionRequest request) {
        String normalizedCity = request.getCity().trim().toUpperCase(Locale.ROOT);
        if (!UP_CITIES.contains(normalizedCity)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "City must be in Uttar Pradesh");
        }

        HomeCollection entity = new HomeCollection();
        entity.setName(request.getName().trim());
        entity.setMobile(request.getMobile().trim());
        entity.setCity(toTitleCase(request.getCity().trim()));
        entity.setConsent(Boolean.TRUE.equals(request.getConsent()));
        entity.setStatus(HomeCollectionStatus.NEW);

        return repository.save(entity);
    }

    private String toTitleCase(String value) {
        String lower = value.toLowerCase(Locale.ROOT);
        if (lower.isEmpty()) {
            return lower;
        }
        return Character.toUpperCase(lower.charAt(0)) + lower.substring(1);
    }
}
