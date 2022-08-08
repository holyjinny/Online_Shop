package com.onlineshop.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onlineshop.project.model.User;
import com.onlineshop.project.model.UserRegisterForm;
import com.onlineshop.project.service.UserService;

@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // 서버에서 회원가입 기능 요청
    @PostMapping("/api/register")
    public void register(UserRegisterForm form) {

        User user = new User();
        user.setEmail(form.getEmail());
        user.setPassword(form.getPassword());
        user.setName(form.getName());
        user.setAge(form.getAge());
        user.setPhone(form.getPhone());
        user.setProfileImage(form.getProfileImage());

        System.out.println("가입 완료 : " + user);

        userService.join(user);
    }

    @GetMapping("/api/userList")
    public List<User> userList(Model model) {

        List<User> users = userService.findUsers();

        model.addAttribute("users", users);

        System.out.println("유저 목록 : " + users);

        return users;

    }
}
