package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IUserService;
import com.smartFitness.itpm.ViewModel.Response;
import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;

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

    @Override
    public User findById(Integer userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));
        return user;

    }

    @Override
    public String deleteUser(Integer userId) {

       User user = userRepository.findById(userId)
               .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

       user.setIsActive(false);

       userRepository.save(user);

       return "Successfully deleted";
    }

    @Override
    public User login(String email, String password) {
        int userCount = (int) userRepository.count();
        List<User> users = findAllUsers();

        for(int i=0;i<userCount;i++){
            User user = users.get(i);

            if(Objects.equals(user.getEmail(), email) && Objects.equals(user.getPassword(), password) ){
                return user;
            }
            else {
                return null;
            }
        }
        return null;
    }


    @Override
    public User ChangePassword(Integer userId , String newPassword) {
        User user = userRepository.findById(userId)
                          .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        user.setPassword(newPassword);

        userRepository.save(user);

        return user;
    }

}