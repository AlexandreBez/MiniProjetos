package com.TelaDeLogin1.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TelaLoginController {
    
    @GetMapping("/login")
    public String TelaDeLogin(){
        return "login";
    }

}