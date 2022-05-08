package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.WeightEvent;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IWeightEventService {
    public List<WeightEvent> findAllWeightEvents();

    public Response saveWeightEvent(WeightEvent weightEvent);

    public Response deleteWeightEvent(Integer id);

    public WeightEvent findById(Integer id);
}
