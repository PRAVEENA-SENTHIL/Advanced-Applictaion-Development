package com.backend.seniorcare.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.seniorcare.Model.User;
import com.backend.seniorcare.Service.UserService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;




@RestController
@RequestMapping("/users")


public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<User>getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping("/post")
    public User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @DeleteMapping
    public void deleteAllUsers(){
        userService.deleteAll();
    }
   

    @DeleteMapping("/{id}")
    public void deleteById(Long id){

        userService.deleteUser(id);

    }
    @PutMapping("/edit")
    public void stateTransfers(){
        userService.deleteAll();
    }
   
    
    

    
    

}