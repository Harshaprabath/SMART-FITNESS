package com.smartFitness.itpm.Controllers;


import com.smartFitness.itpm.Models.FoodFact;
import com.smartFitness.itpm.Services.FoodFactService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/foodfact")

public class FoodFactController {

    @Autowired
    private FoodFactService foodFactService;

    // get all food facts
    @GetMapping("/all")
    public List<FoodFact> findAllFoodFacts() {

        return foodFactService.findAllFoodFacts();
    }


    //delete food fact
    @DeleteMapping("/delete/{id}")
    public Response deleteFoodFacts(@PathVariable(value = "id") Integer foodFactId) {

        return foodFactService.deleteFoodFacts(foodFactId);
    }


    //save food fact
    @PostMapping("/save")
    public Response saveFoodFact(@Valid @RequestBody FoodFact newFoodFact) {

        return foodFactService.saveFoodFact(newFoodFact);
    }


    // Get a Single plan
    @GetMapping("/find/{id}")
    public FoodFact findFoodFactById(@PathVariable(value = "id") Integer foodFactId) {

        return foodFactService.findFoodFactById(foodFactId);
    }

}
