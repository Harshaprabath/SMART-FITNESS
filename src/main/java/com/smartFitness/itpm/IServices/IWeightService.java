package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.WeightGain;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IWeightService {

    public List<WeightGain> findAllWeightPlans();
    public Response saveWeightPlan(WeightGain weightGain);
    public Response deleteWeightPlan(Integer weightGainId);
    public WeightGain findById(Integer weightGainId);

}
