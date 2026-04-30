package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.User;
import com.example.demo.exception.UserAlreadyExistsException;
import com.example.demo.dto.RegisterResponse;
import com.example.demo.auth.JwtUtil;

@Service
public class UserService {

    private final UserRepository repo;
    private RegisterResponse response;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public RegisterResponse createUser(User user) {

        if (repo.existsByUsername(user.username())) {
            throw new UserAlreadyExistsException("");
        }

        response = repo.insert(user);
        response.setToken(JwtUtil.generateToken(response.getUsername()));
        
        return response;

    }
}