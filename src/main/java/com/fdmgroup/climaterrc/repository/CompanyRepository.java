package com.fdmgroup.climaterrc.repository;

import com.fdmgroup.climaterrc.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.r2dbc.repository.R2dbcRepository;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends R2dbcRepository<Company, String> {

    Optional<Company> findByCompanyName(String name);

}
