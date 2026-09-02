package com.example.StudentWithCourse.Repository_Folder;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentWithCourse.Entity_Folder.Courses;

@Repository
public interface CourseRepository extends JpaRepository<Courses, Long> {
    Optional<Courses> findByCoursenameIgnoreCase(String coursename);
}

