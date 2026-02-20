package com.pathotest.homecollection.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class HomeCollectionRequest {

    @NotBlank(message = "Name is required")
    @Size(max = 120, message = "Name must be at most 120 characters")
    private String name;

    @NotBlank(message = "Mobile is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Mobile must be a 10-digit number")
    private String mobile;

    @NotBlank(message = "City is required")
    @Size(max = 80, message = "City must be at most 80 characters")
    private String city;

    @AssertTrue(message = "Consent must be accepted")
    private Boolean consent;

    public String getName() {
        return name;
    }

    public String getMobile() {
        return mobile;
    }

    public String getCity() {
        return city;
    }

    public Boolean getConsent() {
        return consent;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setConsent(Boolean consent) {
        this.consent = consent;
    }
}
