package com.pathotest.labtest.repository;

import com.pathotest.labtest.entity.LabTest;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabTestRepository extends JpaRepository<LabTest, Long> {
    List<LabTest> findByIsActiveTrueOrderByCreatedAtDesc();
}
