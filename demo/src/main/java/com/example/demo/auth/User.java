package com.example.demo;
import java.util.Optional;

public record User(
    String username, 
    String nome, 
    String cognome,
    String password,
    String confirmPassword,
    Optional<String>piva,
    boolean isAzienda,
    String email
    ) { }