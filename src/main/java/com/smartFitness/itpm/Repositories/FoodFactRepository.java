package com.smartFitness.itpm.Repositories;

import com.smartFitness.itpm.Models.FoodFact;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FoodFactRepository extends CrudRepository<FoodFact, Integer> {

    //search query
    @Query(value = "SELECT * FROM foodfact f WHERE f.food_name LIKE ?1% ",nativeQuery = true)
    List<FoodFact> foodFactSearch(String foodName);
}
