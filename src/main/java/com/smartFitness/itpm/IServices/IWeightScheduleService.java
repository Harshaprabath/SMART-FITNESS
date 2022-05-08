package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.WeightSchedule;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IWeightScheduleService {

    public List<WeightSchedule> findAllWeightSchedules();

    public Response saveWeightSchedule(WeightSchedule weightSchedule);

    public Response deleteWeightSchedule(Integer id);

    public WeightSchedule findById(Integer id);

}





