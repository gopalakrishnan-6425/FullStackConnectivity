package com.example.StudentWithCourse.Controller_Folder;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentWithCourse.Entity_Folder.Users;
import com.example.StudentWithCourse.Service_Folder.UserService;
import com.example.StudentWithCourse.DTO_Folder.DTOLogin;
import com.example.StudentWithCourse.DTO_Folder.DTORegister;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService uservice;

    @PostMapping("/add")
    public String addUsers(@RequestBody DTORegister user){
        return uservice.saveUsers(user);
    }
   
}
