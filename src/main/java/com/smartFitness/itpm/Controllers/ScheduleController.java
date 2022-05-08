package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.Schedule;
import com.smartFitness.itpm.Services.ScheduleService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;




@CrossOrigin
@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;


    // Get a Single schedule
    @GetMapping("/find/{id}")
    public Schedule getScheduleById(@PathVariable(value = "id") Integer scheduleId) {
        return scheduleService.findById(scheduleId);

    }

    // get all schedules
    @GetMapping("/all")
    public List<Schedule> findAllSchedule() {

        return scheduleService.findAllSchedule();

    }



    // add and update  schedule
    @PostMapping("/save")
    public Response saveSchedule(@Valid @RequestBody Schedule schedule) {

        return scheduleService.saveSchedule(schedule);

    }
    // Delete an schedule
    @DeleteMapping("/delete/{id}")
    public Response deleteSchedule(@PathVariable(value = "id") Integer scheduleId) {

        return scheduleService.deleteSchedule(scheduleId);

    }

}