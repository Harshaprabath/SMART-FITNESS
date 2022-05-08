package com.smartFitness.itpm.Repositories;

import com.smartFitness.itpm.Models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

     //search query
     @Query(value = "SELECT * FROM user u WHERE u.first_name LIKE ?1% OR u.last_name LIKE ?1% ",nativeQuery = true)
     List<User> userSearch(String Name);

}
