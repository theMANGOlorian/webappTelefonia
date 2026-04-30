package com.example.demo.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class JwtValidator {

    public static Claims validateToken(String token) {

        return Jwts.parserBuilder()
                .verifyWith(JwtUtil.getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}