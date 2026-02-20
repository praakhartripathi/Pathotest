package com.pathotest.homecollection.repository;

import com.pathotest.homecollection.entity.HomeCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HomeCollectionRepository extends JpaRepository<HomeCollection, Long> {
}
