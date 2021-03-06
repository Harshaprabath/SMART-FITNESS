package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.CurrentUser;
import com.smartFitness.itpm.ViewModel.Response;
import com.smartFitness.itpm.Models.User;

import java.util.List;

public interface IUserService {

    public List<User> findAllUsers();
    public Response saveUser(User user);
    public User findById(Integer userId);
    public Response deleteUser(Integer userId);
    public User login(String email, String password);
    public User ChangePassword(Integer Userid, String newPassword);
    public User findCurrentUser();
    public List<User> listAll();
    public List<User> userSearch(String name);

}
