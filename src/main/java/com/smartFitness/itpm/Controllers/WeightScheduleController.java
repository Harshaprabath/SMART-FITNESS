package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.WeightSchedule;
import com.smartFitness.itpm.Services.WeightScheduleService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/weight/schedule")
public class WeightScheduleController {

    @Autowired
    private WeightScheduleService weightScheduleService;

    @CrossOrigin
    @GetMapping("/all")
    public List<WeightSchedule> findAllWeightSchedules() {

        return weightScheduleService.findAllWeightSchedules();

    }

    @CrossOrigin
    @PostMapping("/save")
    public Response saveWeightSchedule(@Valid @RequestBody WeightSchedule weightSchedule) {

        return weightScheduleService.saveWeightSchedule(weightSchedule);

    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public Response deleteWeightSchedule(@PathVariable(value = "id") Integer weightScheduleId) {

        return weightScheduleService.deleteWeightSchedule(weightScheduleId);

    }

    @CrossOrigin
    @GetMapping("/find/{id}")
    public WeightSchedule findById(@PathVariable(value = "id") Integer weightScheduleId) {

        return weightScheduleService.findById(weightScheduleId);

    }

}
