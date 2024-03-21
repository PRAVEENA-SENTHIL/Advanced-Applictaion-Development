package com.backend.seniorcare.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.seniorcare.Repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    private UserRepo userRepo;
}
