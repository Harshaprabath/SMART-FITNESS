package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Common.Response;
import com.smartFitness.itpm.Models.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {

    public List<User> findAllUsers();
    public Response saveUser(User user);
    public User findById(Integer userId);
    public String deleteUser(Integer userId);
    public User login(String email, String password);
    public User ChangePassword(Integer Userid, String newPassword);
}
