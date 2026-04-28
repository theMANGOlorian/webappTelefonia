package com.example.demo.model;

public record User(
    String username, 
    String nome, 
    String cognome,
    String password,
    String piva,
    boolean isAzienda,
    String email
    ) { }