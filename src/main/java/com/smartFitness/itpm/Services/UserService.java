package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IUserService;
import com.smartFitness.itpm.Models.CurrentUser;
import com.smartFitness.itpm.ViewModel.Response;
import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

    private CurrentUser currentUser;

    //get all
    @Override
    public List<User> findAllUsers() {

        List<User> users = (List<User>) userRepository.findAll();

        List<User> ActiveUsers = new ArrayList<>();
        for(int i=0;i<users.size();i++){

            User user = users.get(i);

            if (user.getIsActive()) {
                ActiveUsers.add(user);
            }
        }
        return ActiveUsers;
    }

    //add and update
    @Override
    public Response saveUser(User NewUser) {

        Response response = new Response();

        if(NewUser.getId() == null) {
            userRepository.save(NewUser);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewUser.getId() != null){

            userRepository.save(NewUser);
            response.isSuccess = true;
            response.message = "Successfully Update";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }

        return response;
    }

    //get by id
    @Override
    public User findById(Integer userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        return user;

    }

    //remove
    @Override
    public Response deleteUser(Integer userId) {

        Response response = new Response();
        User user = userRepository.findById(userId)
               .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        if(user != null) {
            user.setIsActive(false);
            userRepository.save(user);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
         return response;
    }

    //login
    @Override
    public User login(String email, String password) {

        int userCount = (int) userRepository.count();
        List<User> users = findAllUsers();

        for(int i=0;i<userCount;i++){
            User user = users.get(i);

            if(Objects.equals(user.getEmail(), email) && Objects.equals(user.getPassword(), password) ){
                currentUser= new CurrentUser();
                currentUser.setCurrentUser(user);
                return user;
            }

        }
        return null;
    }

    //change password
    @Override
    public User ChangePassword(Integer userId , String newPassword) {
        User user = userRepository.findById(userId)
                          .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        user.setPassword(newPassword);

        userRepository.save(user);

        return user;
    }

    //get logged user
    @Override
    public User findCurrentUser() {
        return currentUser.getCurrentUser();
    }

    @Override
    public List<User> listAll() {

        List<User> users = (List<User>) userRepository.findAll();
        users.sort((o1, o2)
                -> o1.getFirstName().compareTo(
                o2.getFirstName()));
        return users;
    }

    //search
    @Override
    public List<User> userSearch(String name){

        return userRepository.userSearch(name);

    }

}