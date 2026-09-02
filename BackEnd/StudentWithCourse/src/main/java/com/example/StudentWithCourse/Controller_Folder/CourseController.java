package com.example.StudentWithCourse.Controller_Folder;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentWithCourse.DTO_Folder.DTOCourse;
import com.example.StudentWithCourse.Entity_Folder.Courses;
import com.example.StudentWithCourse.Service_Folder.CourseService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {
    private final CourseService coservice;

    @PostMapping("/add")
    public Courses getAdd(@RequestBody DTOCourse course){
        return coservice.addCourses(course);
    }
    
}
