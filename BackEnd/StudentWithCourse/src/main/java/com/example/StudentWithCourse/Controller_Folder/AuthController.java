package com.example.StudentWithCourse.Controller_Folder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.StudentWithCourse.DTO_Folder.DTOLogin;
import com.example.StudentWithCourse.DTO_Folder.DTORegister;
import com.example.StudentWithCourse.Entity_Folder.Users;
import com.example.StudentWithCourse.Repository_Folder.UserRepository;
import com.example.StudentWithCourse.Service_Folder.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserService service;
    @Autowired
    private UserRepository repo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<Users> userRegister(@RequestBody DTORegister register){
        Users user = service.registration(register);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Users> userLogin(@RequestBody DTOLogin login){
        Users user = repo.findByEmail(login.getEmail()).orElseThrow(()->new RuntimeException("User not found...!"));
        if(!passwordEncoder.matches(login.getPassword(),user.getPassword())){
            throw new RuntimeException("Invalid passsword");
        }
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    @PutMapping("/update")
    public ResponseEntity<Users> updateUsers(@RequestBody DTORegister register){
        Users user =  service.updateRegisteredUsers(register);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    @DeleteMapping("/delete/{userid}")
    public ResponseEntity<String> deleteUsers(@PathVariable Long userid , @RequestBody DTORegister register){
        service.deleteRegisteredUser(userid,register);
        return ResponseEntity.status(HttpStatus.OK).body("User deleted successfully..!");
    }
}
