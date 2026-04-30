package com.example.demo.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UserService;
import com.example.demo.model.User;
import com.example.demo.dto.RegisterResponse;

@RestController
public class UserController {
    
    private final UserService service;
    private RegisterResponse response;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {

        response = service.createUser(user);
     
        return response;
    }

}