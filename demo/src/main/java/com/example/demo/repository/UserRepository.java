package com.example.demo.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public class UserRepository {

    private final JdbcTemplate jdbc;

    public UserRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }


    public boolean existsByUsername(String username) {
        Integer count = jdbc.queryForObject(
            "SELECT COUNT(*) FROM users WHERE username = ?",
            Integer.class,
            username
        );
        return count != null && count > 0;
    }


    public void insert(User user) {
        String sql = """
            INSERT INTO users ( username, email, name, surname, pwd, isAzienda, piva) VALUES (?, ?, ?, ?, crypt( ? , gen_salt('sha256crypt')), ? , ?);
        """;

        jdbc.update(sql,
            user.username(),
            user.email(),
            user.nome(),
            user.cognome(),
            user.password(),
            user.isAzienda(),
            user.piva()
        );
    }

}