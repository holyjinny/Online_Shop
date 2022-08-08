package com.onlineshop.project.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.onlineshop.project.model.User;

@Repository
public class MemoryUserRepository implements UserRepository {

    private static final Map<Long, User> userContainer = new HashMap<>();

    private long sequence = 0L;

    @Override
    public User register(User user) {
        user.setId(++sequence);
        userContainer.put(user.getId(), user);
        return user;
    }

    @Override
    public Optional<User> findById(Long id) {

        return Optional.ofNullable(userContainer.get(id));
    }

    @Override
    public List<User> findAll() {

        return new ArrayList<>(userContainer.values());
    }

}
