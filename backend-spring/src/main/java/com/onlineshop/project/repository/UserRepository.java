package com.onlineshop.project.repository;

import java.util.List;
import java.util.Optional;

import com.onlineshop.project.model.User;

public interface UserRepository {

    // 회원 가입 기능
    User register(User user);

    // 회원 찾기
    Optional<User> findById(Long id);

    // 회원 목록
    List<User> findAll();
}
