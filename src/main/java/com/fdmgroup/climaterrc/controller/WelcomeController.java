package com.fdmgroup.climaterrc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {

    @GetMapping("/")
    public String getHome(Model model) {
        return "index";
    }

    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }

}
