package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.Nutritionist;
import com.smartFitness.itpm.Services.NutritionistService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import javax.validation.Valid;


@CrossOrigin
@RestController
@RequestMapping("/api/nutritionist")
public class NutritionistController {

    @Autowired
    private NutritionistService nutritionistService;


    // get all nutritionist
    @GetMapping("/all")
    public List<Nutritionist> findAllNutritionists() {

        return nutritionistService.findAllNutritionists();
    }

    // Delete nutritionist
    @DeleteMapping("/delete/{id}")
    public Response deleteNutritionists(@PathVariable(value = "id") Integer nutritionistId) {

        return nutritionistService.deleteNutritionists(nutritionistId);
    }

    // add and update nutritionist
    @PostMapping("/save")
    public Response saveNutritionist(@Valid @RequestBody Nutritionist nutritionist) {

        return nutritionistService.saveNutritionist(nutritionist);
    }
}

