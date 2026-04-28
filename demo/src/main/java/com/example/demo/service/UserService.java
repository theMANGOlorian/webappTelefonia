package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.exception.UserAlreadyExistsException;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UserRepository;
import com.example.demo.model.User;
import com.example.demo.exception.UserAlreadyExistsException;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public void createUser(User user) {

        if (repo.existsByUsername(user.username())) {
            throw new UserAlreadyExistsException("");
        }

        repo.insert(user);
    }
}