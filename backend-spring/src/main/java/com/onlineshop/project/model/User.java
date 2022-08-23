package com.onlineshop.project.model;

import lombok.Data;

@Data
public class User {

    private long id;
    private String email;
    private String name;
    private String password;
}
