package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.WeightEvent;
import com.smartFitness.itpm.Services.WeightEventService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/weight/event")
public class WeightEventController {

    @Autowired
    private WeightEventService weightEventService;

    @GetMapping("/all")
    public List<WeightEvent> findAllWeightEvents() {

        return weightEventService.findAllWeightEvents();

    }

    @PostMapping("/save")
    public Response saveWeightEvent(@Valid @RequestBody WeightEvent weightEvent) {

        return weightEventService.saveWeightEvent(weightEvent);

    }

    @DeleteMapping("/delete/{id}")
    public Response deleteWeightEvent(@PathVariable(value = "id") Integer weightEventId) {

        return weightEventService.deleteWeightEvent(weightEventId);

    }

    @GetMapping("/find/{id}")
    public WeightEvent findById(@PathVariable(value = "id") Integer weightEventId) {

        return weightEventService.findById(weightEventId);

    }

}




