package com.onlineshop.project.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String test() {
        return "Spring's Data 정보가 가져와진다";
    }
}