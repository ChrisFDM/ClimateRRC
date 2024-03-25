package com.fdmgroup.climaterrc.repository;

import com.fdmgroup.climaterrc.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, String> {

    Optional<Company> findByCompanyName(String name);
    void deleteByCompanyName(String name);

}
