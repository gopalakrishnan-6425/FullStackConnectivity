package com.example.StudentWithCourse.Entity_Folder;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Users")
@Getter@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    private String username;
    private Integer age;
    private String gender;
    private String email;
    private String password;

    @ManyToOne
    @JoinColumn(name="courseid",nullable = false)
    private Courses course;

}
