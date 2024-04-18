package com.fdmgroup.climaterrc.controller;

import com.fdmgroup.climaterrc.model.User;
import com.fdmgroup.climaterrc.repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    private UserRepository userRepository;

    @GetMapping("/users")
    public String users() {
        return "users";
    }

    @GetMapping("/deleteUser")
    public String deleteUser() {
        return "deleteUser";
    }

    @GetMapping("/userList")
    public String userList(Model model) {
        Iterable<User> listUser = userRepository.findAll();
        model.addAttribute("listUsers", listUser);
        return "userList";
    }

//    @GetMapping("/getUser")
//    public String getUser(@RequestParam String username) {
//        userRepository.findByUsername(username);
//        return "getUser";
//    }
//
//    @PostMapping("/addUser")
//    public String addUser(@RequestParam String name, @RequestParam String username, @RequestParam String password, @RequestParam String email) {
//        User user = new User(name, username, password, email);
//        userRepository.save(user);
//        return "welcome";
//    }
//
//    @PostMapping("/deleteUser")
//    public String removeUser(@RequestParam String username) {
//        userRepository.deleteByUsername(username);
//        return "welcome";
//    }



}
