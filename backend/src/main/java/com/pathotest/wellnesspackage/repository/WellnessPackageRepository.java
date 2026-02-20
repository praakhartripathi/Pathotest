package com.pathotest.wellnesspackage.repository;

import com.pathotest.wellnesspackage.entity.WellnessPackage;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WellnessPackageRepository extends JpaRepository<WellnessPackage, Long> {
    List<WellnessPackage> findByIsActiveTrueOrderByCreatedAtDesc();
}
