package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IWeightScheduleService;
import com.smartFitness.itpm.Models.WeightSchedule;
import com.smartFitness.itpm.Repositories.WeightScheduleRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeightScheduleService implements IWeightScheduleService {

    @Autowired
    private WeightScheduleRepository weightScheduleRepository;

    @Override
    public List<WeightSchedule> findAllWeightSchedules() {
        List<WeightSchedule> weightSchedules = (List<WeightSchedule>) weightScheduleRepository.findAll();
        List<WeightSchedule> activeWeightSchedules = new ArrayList<WeightSchedule>();

        for (int i = 0; i < weightSchedules.size(); i++) {
            WeightSchedule weightSchedule = weightSchedules.get(i);

            if (weightSchedule.getIsActive())
                activeWeightSchedules.add(weightSchedule);
        }

        return activeWeightSchedules;
    }

    @Override
    public Response saveWeightSchedule(WeightSchedule weightSchedule) {

        Response response = new Response();

        if (weightSchedule.getId() == null) {
            weightScheduleRepository.save(weightSchedule);
            response.message = "Successfully saved";
            response.isSuccess = true;
        }
        else if (weightSchedule.getId() != null) {
            weightScheduleRepository.save(weightSchedule);
            response.message = "Successfully updated";
            response.isSuccess = true;
        }
        else {
            response.isSuccess = false;
            response.message = "An error occurred";
        }

        return response;
    }

    @Override
    public Response deleteWeightSchedule(Integer id) {

        Response response = new Response();

        WeightSchedule weightSchedule = weightScheduleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Weight schedule", "id", id));

        if (weightSchedule != null) {
            weightSchedule.setIsActive(false);
            weightScheduleRepository.save(weightSchedule);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else {
            response.isSuccess = false;
            response.message = "An error occurred";
        }

        return response;
    }

    @Override
    public WeightSchedule findById(Integer id) {

        WeightSchedule weightSchedule = weightScheduleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Weight schedule", "id", id));

        return weightSchedule;
    }
}
