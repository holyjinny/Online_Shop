package com.onlineshop.project.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    static String basicId;
    static String basicTitle;
    static String basicPrice;
    static String basicImg;
    static String value;

    @GetMapping("/api/hello")
    public String test() {
        return "Spring's Data 정보가 가져와진다";
    }

    @PostMapping("/api/send")
    public static void Log(String id, String title, String price, String image, String num) {
        basicId = id;
        basicTitle = title;
        basicPrice = price;
        basicImg = image;
        value = num;

        System.out.println("ID : " + basicId);
        System.out.println("Title" + basicTitle);
        System.out.println("Price" + basicPrice);
        System.out.println("Img" + basicImg);
        System.out.println("Num : " + value);

    }

    @GetMapping("/api/cart")
    public String[] cart() {
        return new String[] { basicId, basicTitle, basicPrice, basicImg };
    }

    @GetMapping("/api/cartNum")
    public String cartNum() {
        System.out.println("value : " + value);
        return value;
    }
}