package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.Repositories.UserRepository;
import com.smartFitness.itpm.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    // get all users
    @GetMapping("/all")
    public List<User> findAllUsers() {

        return userService.findAllUsers();

    }

    // Get a Single user
    @GetMapping("/find/{id}")
    public User getUserById(@PathVariable(value = "id") Integer userId) {
        return userService.findById(userId);

    }

    // add and update a user
    @PostMapping("/save")
    public String saveUser(@Valid @RequestBody User user) {

        return userService.saveUser(user);

    }

    // Delete a user
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable(value = "id") Integer userId) {

        return userService.deleteUser(userId);

    }

    //Login
    @PostMapping("/login/{email}/{password}")
    public User login(@PathVariable(value = "email") String email,@PathVariable(value = "password") String password) {

        return userService.login(email,password);

    }

    //Change Password
    @PostMapping("/password/{id}/{newPassword}")
    public User ChangePassword(@PathVariable(value = "id") Integer userId,@PathVariable(value = "newPassword") String newPassword) {

        return userService.ChangePassword(userId,newPassword);

    }



}