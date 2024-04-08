package com.fdmgroup.climaterrc.repository;

import com.fdmgroup.climaterrc.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends R2dbcRepository<User, String> {

    Optional<User> findByUsername(String username);
    void deleteByUsername(String username);

}
