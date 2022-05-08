package com.smartFitness.itpm.Repositories;

import com.smartFitness.itpm.Models.Recipe;

import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Integer> {
}
