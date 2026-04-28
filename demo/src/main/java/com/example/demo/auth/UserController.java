package com.example.demo;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class UserController {
    
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {

        
        return user; 
    }

}