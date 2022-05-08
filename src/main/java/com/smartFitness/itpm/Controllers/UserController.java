package com.smartFitness.itpm.Controllers;

import com.itextpdf.text.DocumentException;
import com.smartFitness.itpm.Models.CurrentUser;
import com.smartFitness.itpm.PDFExporter.UserPDFExporter;
import com.smartFitness.itpm.ViewModel.Response;
import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    //generate report
    @GetMapping("/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss") ;
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<User> listUsers = userService.listAll();

        UserPDFExporter exporter = new UserPDFExporter(listUsers);
        exporter.export(response);

    }

   // search
    @GetMapping("/Search/{name}")
    public List<User> Search (@PathVariable(value = "name") String name) {

        return userService.userSearch(name);

    }

}