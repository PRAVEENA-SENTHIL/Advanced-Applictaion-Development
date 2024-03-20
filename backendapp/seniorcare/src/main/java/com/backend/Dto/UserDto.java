package com.backend.Dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user_table")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String email;
    
    
}
