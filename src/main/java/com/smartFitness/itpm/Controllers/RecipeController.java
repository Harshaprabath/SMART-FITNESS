package com.smartFitness.itpm.Controllers;
import com.itextpdf.text.DocumentException;
import com.smartFitness.itpm.Models.Recipe;
import com.smartFitness.itpm.Models.User;
import com.smartFitness.itpm.PDFExporter.UserPDFExporter;
import com.smartFitness.itpm.Services.RecipeService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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

    // Delete recipe
    @DeleteMapping("/delete/{id}")
    public Response deleteRecipes(@PathVariable(value = "id") Integer RecipeId) {

        return recipeService.deleteRecipes(RecipeId);
    }

    // add and update recipe
    @PostMapping("/save")
    public Response saveRecipe(@Valid @RequestBody Recipe recipe) {

        return recipeService.saveRecipe(recipe);
    }

    // Get a Single recipe
    @GetMapping("/find/{id}")
    public Recipe getRecipeById(@PathVariable(value = "id") Integer recipeId) {

        return recipeService.findById(recipeId);
    }

}
