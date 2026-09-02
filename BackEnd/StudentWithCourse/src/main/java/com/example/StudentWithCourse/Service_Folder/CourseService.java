package com.example.StudentWithCourse.Service_Folder;

import org.springframework.stereotype.Service;

import com.example.StudentWithCourse.DTO_Folder.DTOCourse;
import com.example.StudentWithCourse.Entity_Folder.Courses;
import com.example.StudentWithCourse.Repository_Folder.CourseRepository;

import io.swagger.v3.oas.annotations.servers.Server;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository corepo;

    public Courses addCourses(DTOCourse dtoCourse) {
    Courses course = new Courses();
    course.setCoursename(dtoCourse.getCoursename());
    course.setDuration(dtoCourse.getDuration());
    course.setTopics(dtoCourse.getTopics());
    return corepo.save(course);
   }
}
