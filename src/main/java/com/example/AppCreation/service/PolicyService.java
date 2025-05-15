package com.example.AppCreation.service;

import com.example.AppCreation.entity.Policy;
import com.example.AppCreation.repository.PolicyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PolicyService {
    @Autowired
    private PolicyRepository policyRepository;

    public Optional<Policy> getPolicyById(Long id) {
        return policyRepository.findById(id);
    }
}