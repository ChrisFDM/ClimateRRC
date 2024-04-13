package com.fdmgroup.climaterrc.controller;

import com.fdmgroup.climaterrc.model.Company;
import com.fdmgroup.climaterrc.repository.CompanyRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CompanyController {

    private CompanyRepository companyRepo;

//    @GetMapping("/companies")
//    public String companies() {
//        return "companies";
//    }
//
//    @GetMapping("/deleteCompanies")
//    public String deleteCompanies() {
//        return "deleteCompanies";
//    }
//
//    @GetMapping("/companyList")
//    public String companyList(Model model) {
//        Iterable<Company> listCompanies = (Iterable<Company>) companyRepo.findAll();
//        model.addAttribute("listCompanies", listCompanies);
//        return "companyList";
//    }
//
//    @GetMapping("/getCompany")
//    public String getCompany(@RequestParam String name) {
//        companyRepo.findByCompanyName(name);
//        return "getCompany";
//    }
//
//    @PostMapping("/addCompany")
//    public String addCompany(@RequestParam String name, @RequestParam int timeToNetZero, @RequestParam double co2Emissions, @RequestParam int employeeNumber, @RequestParam double totaledScore) {
//        Company company = new Company(name, timeToNetZero, co2Emissions, employeeNumber, totaledScore);
//        companyRepo.save(company);
//        return "welcome";
//    }
//
//    @PostMapping("/deleteCompany")
//    public String deleteCompany(@RequestParam String name) {
//        companyRepo.deleteByCompanyName(name);
//        return "welcome";
//    }

}
