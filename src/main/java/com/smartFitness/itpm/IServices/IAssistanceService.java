package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Assistance;

import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IAssistanceService {

    public List<Assistance> findAllAssistance();

    Response saveAssistance(Assistance NewAssistance);

    public Assistance findById(Integer assistanceId);

    Response deleteAssistance(Integer assistanceId);

}
