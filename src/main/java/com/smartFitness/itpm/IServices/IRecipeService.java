package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Recipe;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IRecipeService {

    public List<Recipe> findAllRecipes();
    public Response deleteRecipes(Integer recipeId);
    public Response saveRecipe(Recipe NewRecipe);
    public Recipe findById(Integer recipeId);
}
