package com.onlineshop.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineshop.project.model.User;
import com.onlineshop.project.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 회원가입
    public Long join(User user) {
        userRepository.register(user);
        return user.getId();
    }

    // 회원 목록
    public List<User> findUsers() {
        return userRepository.findAll();
    }
}
