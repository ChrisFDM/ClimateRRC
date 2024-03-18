package com.fdmgroup.climaterrc.controller;

import com.fdmgroup.climaterrc.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepo;

}
