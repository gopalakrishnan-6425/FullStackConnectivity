package com.example.StudentWithCourse.Controller_Folder;

import org.apache.catalina.filters.AddDefaultCharsetFilter.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentWithCourse.DTO_Folder.DTOCourse;
import com.example.StudentWithCourse.Entity_Folder.Courses;
import com.example.StudentWithCourse.Service_Folder.CourseService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/courses")
@RequiredArgsConstructor
public class CourseController {
    @Autowired
    private final CourseService coservice;

    @PostMapping("/add")
    public ResponseEntity<Courses> getAdd(@RequestBody DTOCourse course) {
        Courses c = coservice.addCourses(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(c);
    }

    @PutMapping("/update")
    public ResponseEntity<Courses> updateCourse(@RequestBody DTOCourse course) {
        Courses co = coservice.courseUpdation(course);
        return ResponseEntity.status(HttpStatus.OK).body(co);
    }

    @DeleteMapping("/delete/{coursename}")
    public ResponseEntity<String> deleteCourse(@PathVariable String coursename) {
        coservice.deleteCourseByName(coursename);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Course removed successfully..!");
    }

}
