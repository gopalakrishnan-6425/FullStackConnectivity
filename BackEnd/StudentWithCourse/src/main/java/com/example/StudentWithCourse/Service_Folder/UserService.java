package com.example.StudentWithCourse.Service_Folder;

import org.springframework.stereotype.Service;

import com.example.StudentWithCourse.Config.PasswordConfig;
import com.example.StudentWithCourse.DTO_Folder.DTOLogin;
import com.example.StudentWithCourse.DTO_Folder.DTORegister;
import com.example.StudentWithCourse.Entity_Folder.Courses;
import com.example.StudentWithCourse.Entity_Folder.Users;
import com.example.StudentWithCourse.Repository_Folder.CourseRepository;
import com.example.StudentWithCourse.Repository_Folder.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userrepo;
    private final CourseRepository courserepo;
    private final PasswordEncoder passwordEncoder;

    public String saveUsers(DTORegister dtouser) {
        Courses course = courserepo.findByCoursenameIgnoreCase(dtouser.getCoursename())
                .orElseThrow(() -> new RuntimeException("Course not found: " + dtouser.getCoursename()));

        Users user = new Users();
        user.setUsername(dtouser.getUsername());
        user.setAge(dtouser.getAge());
        user.setGender(dtouser.getGender());
        user.setEmail(dtouser.getEmail());
        user.setPassword(dtouser.getPassword());
        user.setCourse(course);

        userrepo.save(user);
        return "User Id : " + user.getUserid() + "\nUser Name : " + dtouser.getUsername() + "\t Added Sucessfully...!";
    }

    public Users registration(DTORegister register) {
        if (userrepo.existsByEmail(register.getEmail())) {
            throw new RuntimeException("Email already exists..!");
        }

        Courses course = courserepo.findByCoursenameIgnoreCase(register.getCoursename())
                .orElseThrow(() -> new RuntimeException("Course not found: " + register.getCoursename()));

        String encryptPassword = passwordEncoder.encode(register.getPassword());
        System.out.println(encryptPassword);

        Users user = new Users();
        user.setUsername(register.getUsername());
        user.setAge(register.getAge());
        user.setGender(register.getGender());
        user.setEmail(register.getEmail());
        user.setPassword(encryptPassword);
        user.setCourse(course);

        return userrepo.save(user);
    }

    public Users updateRegisteredUsers(DTORegister register) {
        Users existingUser = userrepo.findByEmail(register.getEmail())
                .orElseThrow(() -> new RuntimeException("Users not found...!"));

        existingUser.setUsername(register.getUsername());
        existingUser.setAge(register.getAge());
        existingUser.setGender(register.getGender());

        Courses course = courserepo.findByCoursenameIgnoreCase(register.getCoursename())
                .orElseThrow(() -> new RuntimeException("Course Not Found...!"));
        existingUser.setCourse(course);

        if (register.getPassword() != null && !register.getPassword().isEmpty()) {
            existingUser.setPassword(passwordEncoder.encode(register.getPassword()));
        }

        Users updatedUsers = userrepo.save(existingUser);
        return updatedUsers;
    }

    public void deleteRegisteredUser(Long userid, DTORegister register) {
        Users deleteUser = userrepo.findById(userid).orElseThrow(()->new RuntimeException("User Id Not Found..! Try again"));
        userrepo.delete(deleteUser);
    }
}
