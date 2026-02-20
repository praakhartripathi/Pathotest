package com.pathotest.location.repository;

import com.pathotest.location.entity.Lab;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LabRepository extends JpaRepository<Lab, Long> {

    @Query("""
            select l from Lab l
            join l.area a
            join a.city c
            where l.isActive = true and lower(c.name) = lower(:city)
            order by a.name asc, l.name asc
            """)
    List<Lab> findActiveLabsByCity(@Param("city") String city);
}
