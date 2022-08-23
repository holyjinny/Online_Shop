package com.onlineshop.project.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.onlineshop.project.entity.UserEntity;
import com.onlineshop.project.model.User;
import com.onlineshop.project.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User creatUser(User user) {
        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);

        userRepository.save(userEntity);

        return user;
    }

}
