package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.CurrentUser;
import com.smartFitness.itpm.ViewModel.Response;
import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
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

    // get current user
    @GetMapping("/currentUser")
    public User getCurrentUser() {


        return userService.findCurrentUser();

    }

    // Get a Single user
    @GetMapping("/find/{id}")
    public User getUserById(@PathVariable(value = "id") Integer userId) {
        return userService.findById(userId);

    }

    // add and update a user
    @PostMapping("/save")
    public Response saveUser(@Valid @RequestBody User user) {

        return userService.saveUser(user);

    }

    // Delete a user
    @DeleteMapping("/delete/{id}")
    public Response deleteUser(@PathVariable(value = "id") Integer userId) {

        return userService.deleteUser(userId);

    }

    //Login
    @GetMapping("/login/{email}/{password}")
    public User login(@PathVariable(value = "email") String email,@PathVariable(value = "password") String password) {

        return userService.login(email,password);

    }

    //Change Password
    @PostMapping("/password/{id}/{newPassword}")
    public User ChangePassword(@PathVariable(value = "id") Integer userId,@PathVariable(value = "newPassword") String newPassword) {

        return userService.ChangePassword(userId,newPassword);

    }



}