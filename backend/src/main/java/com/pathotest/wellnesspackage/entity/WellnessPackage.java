package com.pathotest.wellnesspackage.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "wellness_packages")
public class WellnessPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(name = "original_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal originalPrice;

    @Column(name = "discount_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal discountPrice;

    @Column(name = "parameters_count", nullable = false)
    private Integer parametersCount;

    @Column(name = "tests_count", nullable = false)
    private Integer testsCount;

    @Column(name = "profiles_count", nullable = false)
    private Integer profilesCount;

    @Column(nullable = false, length = 30)
    private String gender;

    @Column(name = "is_active", nullable = false)
    private Boolean isActive;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    public Long getId() { return id; }
    public String getName() { return name; }
    public BigDecimal getOriginalPrice() { return originalPrice; }
    public BigDecimal getDiscountPrice() { return discountPrice; }
    public Integer getParametersCount() { return parametersCount; }
    public Integer getTestsCount() { return testsCount; }
    public Integer getProfilesCount() { return profilesCount; }
    public String getGender() { return gender; }
    public Boolean getIsActive() { return isActive; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}
