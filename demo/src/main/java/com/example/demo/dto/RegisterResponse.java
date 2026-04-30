package com.example.demo.dto;

public class RegisterResponse {
    private String id;
    private String username;
    private String token;

    public RegisterResponse() {}

    public RegisterResponse(String id, String username) {
        this.id = id;
        this.username = username;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getToken() {
        return token;
    }
}

