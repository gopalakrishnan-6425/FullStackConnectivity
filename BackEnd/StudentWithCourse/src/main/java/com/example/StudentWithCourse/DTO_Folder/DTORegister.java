package com.example.StudentWithCourse.DTO_Folder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
// @Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DTORegister {
    private String username;
    private Integer age;
    private String gender;
    private String email;
    private String password;
    private String coursename;
}
