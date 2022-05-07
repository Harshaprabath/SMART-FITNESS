package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IRecipeService;
import com.smartFitness.itpm.Models.Recipe;
import com.smartFitness.itpm.Repositories.RecipeRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeService implements IRecipeService {

    @Autowired
    private RecipeRepository recipeRepository;


    @Override
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

    @Override
    public Response deleteRecipes(Integer recipeId) {

        Response response = new Response();
        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new ResourceNotFoundException("Recipe", "id", recipeId));

        if(recipe != null) {
            recipe.setActive(false);
            recipeRepository.save(recipe);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }

    @Override
    public Response saveRecipe(Recipe NewRecipe) {

        Response response = new Response();

        if(NewRecipe.getId() == null) {
            recipeRepository.save(NewRecipe);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewRecipe.getId() != null){

            recipeRepository.save(NewRecipe);
            response.isSuccess = true;
            response.message = "Successfully Update";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessful";
        }

        return response;
    }

    @Override
    public Recipe findById(Integer recipeId) {

        Recipe recipe = recipeRepository.findById(recipeId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan", "id", recipeId));

        return recipe;
    }
}
