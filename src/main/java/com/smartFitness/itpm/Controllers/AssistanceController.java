package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.Models.Assistance;
import com.smartFitness.itpm.Services.AssistanceService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/assistance")
public class AssistanceController {

    @Autowired
    private AssistanceService assistanceService;


    // Get a Single assistance
    @GetMapping("/find/{id}")
    public Assistance getAssistanceById(@PathVariable(value = "id") Integer assistanceId) {
        return assistanceService.findById(assistanceId);

    }

    // get all assistances
    @GetMapping("/all")
    public List<Assistance> findAllAssistance() {

        return assistanceService.findAllAssistance();

    }



    // add and update an assistance
    @PostMapping("/save")
    public Response saveAssistance(@Valid @RequestBody Assistance assistance) {

        return assistanceService.saveAssistance(assistance);

    }
    // Delete an assistance
    @DeleteMapping("/delete/{id}")
    public Response deleteAssistance(@PathVariable(value = "id") Integer assistanceId) {

        return assistanceService.deleteAssistance(assistanceId);

    }

}