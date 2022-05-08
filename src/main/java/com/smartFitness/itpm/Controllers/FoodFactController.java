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

    //get all food fact details
    @GetMapping("/all")
    public List<FoodFact> findAllFoodFacts() {

        return foodFactService.findAllFoodFacts();
    }


    //delete food fact details
    @DeleteMapping("/delete/{id}")
    public Response deleteFoodFacts(@PathVariable(value = "id") Integer foodFactId) {

        return foodFactService.deleteFoodFacts(foodFactId);
    }


    //save food facts details
    @PostMapping("/save")
    public Response saveFoodFact(@Valid @RequestBody FoodFact newFoodFact) {

        return foodFactService.saveFoodFact(newFoodFact);
    }


    // get a single food fact
    @GetMapping("/find/{id}")
    public FoodFact findFoodFactById(@PathVariable(value = "id") Integer foodFactId) {

        return foodFactService.findFoodFactById(foodFactId);
    }

    //search food facts
    @GetMapping("/Search/{foodName}")
    public List<FoodFact> Search (@PathVariable(value = "foodName") String foodName) {

        return foodFactService.foodFactSearch(foodName);

    }

}
