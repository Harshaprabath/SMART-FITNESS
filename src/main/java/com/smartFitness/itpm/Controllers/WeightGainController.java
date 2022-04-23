package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.WeightGain;
import com.smartFitness.itpm.Services.WeightService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/weight")
public class WeightGainController {

    @Autowired
    private WeightService weightService;

    @GetMapping("/all")
    public List<WeightGain> findAllWeightPlans() {

        return weightService.findAllWeightPlans();

    }

    @PostMapping("/save")
    public Response saveWeightGainPlan(@Valid @RequestBody WeightGain weightGain) {

        return weightService.saveWeightPlan(weightGain);

    }

    @DeleteMapping("/delete/{id}")
    public Response deleteWeightGainPlan(@PathVariable(value = "id") Integer weightGainId) {

        return weightService.deleteWeightPlan(weightGainId);

    }

    @GetMapping("/find/{id}")
    public WeightGain findById(@PathVariable(value = "id") Integer weightGainId) {

        return weightService.findById(weightGainId);

    }

}




