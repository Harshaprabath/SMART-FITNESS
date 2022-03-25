package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.IServices.IRecipeService;
import com.smartFitness.itpm.Models.Recipe;
import com.smartFitness.itpm.Repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService implements IRecipeService {

    @Autowired
    private RecipeRepository recipeRepository;


    public List<Recipe> findAllRecipes() {

        List<Recipe> recipes = (List<Recipe>) recipeRepository.findAll();

        List<Recipe> activeRecipes = new ArrayList<>();
        for (int i = 0; i < recipes.size(); i++) {

            Recipe recipe = recipes.get(i);

            if (recipe.isActive()) {
                activeRecipes.add(recipe);
            }
        }
        return activeRecipes;
    }

}
