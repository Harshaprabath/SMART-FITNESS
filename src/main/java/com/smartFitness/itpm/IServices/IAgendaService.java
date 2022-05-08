package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Agenda;

import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IAgendaService {

    public List<Agenda> findAllAgenda();

    Response saveAgenda(Agenda NewAgenda);

    public Agenda findById(Integer agendaId);

    Response deleteAgenda(Integer agendaId);

}
