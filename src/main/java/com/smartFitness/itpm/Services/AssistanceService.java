package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IAssistanceService;
import com.smartFitness.itpm.Models.Assistance;

import com.smartFitness.itpm.Repositories.AssistanceRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AssistanceService implements IAssistanceService  {


    @Autowired
    private AssistanceRepository assistanceRepository;

    private Assistance assistance;



    @Override
    public List<Assistance> findAllAssistance() {

        List<Assistance> assistances = (List<Assistance>) assistanceRepository.findAll();

        List<Assistance> ActiveAssistances = new ArrayList<>();
        for (int i = 0; i < assistances.size(); i++) {

            Assistance assistance = assistances.get(i);

            if (assistance.isActive()) {
                ActiveAssistances.add(assistance);
            }
        }
        return ActiveAssistances;

    }
    @Override
    public Response saveAssistance(Assistance NewAssistance) {

        Response response = new Response();

        if(NewAssistance.getId() == null) {
            assistanceRepository.save(NewAssistance);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewAssistance.getId() != null){

            assistanceRepository.save(NewAssistance);
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
    public Assistance findById(Integer assistanceId) {

        Assistance  assistance = assistanceRepository.findById(assistanceId)
                .orElseThrow(() -> new ResourceNotFoundException("assistance", "id", assistanceId));
        return  assistance;

    }
    @Override
    public Response deleteAssistance(Integer assistanceId) {

        Response response = new Response();
        Assistance assistance = assistanceRepository.findById(assistanceId)
                .orElseThrow(() -> new ResourceNotFoundException("Assistance", "id", assistanceId));

        if(assistance != null) {
            assistance.setActive(false);
            assistanceRepository.save(assistance);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }



}




