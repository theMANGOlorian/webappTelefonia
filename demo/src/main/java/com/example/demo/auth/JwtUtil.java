package com.example.demo.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtUtil {

    // chiave segreta (DEVE essere almeno 32 caratteri)
    private static final SecretKey KEY = Keys.hmacShaKeyFor(
            "super-secret-key-super-secret-key-123456".getBytes(StandardCharsets.UTF_8)
    );

    // genera token
    public static String generateToken(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 ora
                .signWith(KEY)
                .compact();
    }

    // esponiamo la chiave per il validator
    public static SecretKey getKey() {
        return KEY;
    }
}