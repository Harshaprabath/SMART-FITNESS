package com.smartFitness.itpm.Controllers;


import com.smartFitness.itpm.Models.Plan;
import com.smartFitness.itpm.Services.PlanService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/plan")
public class PlanController {

    @Autowired
    private PlanService planService;

    // get all plan
    @GetMapping("/all")
    public List<Plan> findAllPlans() {

        return planService.findAllPlans();
    }

    // Delete plan
    @DeleteMapping("/delete/{id}")
    public Response deletePlans(@PathVariable(value = "id") Integer planId) {

        return planService.deletePlans(planId);
    }

    // add and update plan
    @PostMapping("/save")
    public Response savePlan(@Valid @RequestBody Plan plan) {

        return planService.savePlan(plan);
    }

}
