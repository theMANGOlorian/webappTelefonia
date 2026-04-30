package com.example.demo.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;
import com.example.demo.dto.RegisterResponse;

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

    public RegisterResponse insert(User user) {
        String sql = """
            INSERT INTO users ( username, email, name, surname, pwd, isAzienda, piva) VALUES (?, ?, ?, ?, crypt( ? , gen_salt('bf')), ? , ?) RETURNING id, username;
        """;

        return jdbc.queryForObject(sql, (rs, rowNum) -> 
            new RegisterResponse(
                rs.getString("id"),
                rs.getString("username")
            ),
            /* valori che stop passando alla query*/
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