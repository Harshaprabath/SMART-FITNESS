package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IAgendaService;
import com.smartFitness.itpm.Models.Agenda;
import com.smartFitness.itpm.Repositories.AgendaRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class AgendaService implements IAgendaService {

    @Autowired
    private AgendaRepository agendaRepository;


    @Override
    public List<Agenda> findAllAgenda() {

        List<Agenda> agendas = (List<Agenda>) agendaRepository.findAll();

        List<Agenda> ActiveAgendas = new ArrayList<>();
        for(int i=0;i<agendas.size();i++){

            Agenda agenda = agendas.get(i);

            if (agenda.isActive()) {
                ActiveAgendas.add(agenda);
            }
        }
        return ActiveAgendas;
    }


    @Override
    public Response deleteAgenda(Integer agendasId) {

        Response response = new Response();
        Agenda agenda = agendaRepository.findById(agendasId)
                .orElseThrow(() -> new ResourceNotFoundException("Agenda", "id", agendasId));

        if(agenda != null) {
            agenda.setActive(false);
            agendaRepository.save(agenda);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }

    @Override
    public Response saveAgenda(Agenda NewAgenda) {

        Response response = new Response();

        if(NewAgenda.getId() == null) {
            agendaRepository.save(NewAgenda);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewAgenda.getId() != null){

            agendaRepository.save(NewAgenda);
            response.isSuccess = true;
            response.message = "Successfully Updated";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }

        return response;
    }
    @Override
    public Agenda findById(Integer agendaId) {

        Agenda  agenda = agendaRepository.findById(agendaId)
                .orElseThrow(() -> new ResourceNotFoundException("agenda", "id", agendaId));
        return  agenda;

    }

}
