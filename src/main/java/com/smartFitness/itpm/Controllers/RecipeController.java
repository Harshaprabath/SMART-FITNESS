package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.Recipe;
import com.smartFitness.itpm.Services.RecipeService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/recipe")

public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    // get all recipe
    @GetMapping("/all")
    public List<Recipe> findAllRecipes() {

        return recipeService.findAllRecipes();
    }
}
