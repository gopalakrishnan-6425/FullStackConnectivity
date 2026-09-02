package com.example.StudentWithCourse.Repository_Folder;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentWithCourse.Entity_Folder.Courses;
import com.example.StudentWithCourse.Entity_Folder.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Long>{
    
     Optional<Users> findByEmail(String email);
     Boolean existsByEmail(String email);    
}
