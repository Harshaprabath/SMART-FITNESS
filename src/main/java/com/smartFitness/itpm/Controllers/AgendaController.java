package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Models.Agenda;
import com.smartFitness.itpm.Services.AgendaService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;




@CrossOrigin
@RestController
@RequestMapping("/api/agenda")
public class AgendaController {

    @Autowired
    private AgendaService agendaService;


    // Get a Single schedule
    @GetMapping("/find/{id}")
    public Agenda getAgendaById(@PathVariable(value = "id") Integer agendaId) {
        return agendaService.findById(agendaId);

    }

    // get all schedules
    @GetMapping("/all")
    public List<Agenda> findAllAgenda() {

        return agendaService.findAllAgenda();

    }



    // add and update  schedule
    @PostMapping("/save")
    public Response saveAgenda(@Valid @RequestBody Agenda agenda) {

        return agendaService.saveAgenda(agenda);

    }
    // Delete an schedule
    @DeleteMapping("/delete/{id}")
    public Response deleteAgenda(@PathVariable(value = "id") Integer agendaId) {

        return agendaService.deleteAgenda(agendaId);

    }

}