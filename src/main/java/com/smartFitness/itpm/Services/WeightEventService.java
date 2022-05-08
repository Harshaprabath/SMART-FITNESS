package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IWeightEventService;
import com.smartFitness.itpm.Models.WeightEvent;
import com.smartFitness.itpm.Repositories.WeightEventRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeightEventService implements IWeightEventService {

    @Autowired
    private WeightEventRepository weightEventRepository;

    @Override
    public List<WeightEvent> findAllWeightEvents() {

        List<WeightEvent> weightEvents = (List<WeightEvent>) weightEventRepository.findAll();
        List<WeightEvent> activeWeightEvents = new ArrayList<>();

        for (int i = 0; i < weightEvents.size(); i++) {
            WeightEvent weightEvent = weightEvents.get(i);

            if (weightEvent.getIsActive())
                activeWeightEvents.add(weightEvent);
        }

        return activeWeightEvents;
    }

    @Override
    public Response saveWeightEvent(WeightEvent weightEvent) {

        Response response = new Response();

        if (weightEvent.getId() == null) {
            weightEventRepository.save(weightEvent);
            response.message = "Successfully saved";
            response.isSuccess = true;
        }
        else if (weightEvent.getId() != null) {
            weightEventRepository.save(weightEvent);
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
    public Response deleteWeightEvent(Integer id) {

        Response response = new Response();

        WeightEvent weightEvent = weightEventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("weight event", "id", id));

        if (weightEvent != null) {
            weightEvent.setIsActive(false);
            weightEventRepository.save(weightEvent);

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
    public WeightEvent findById(Integer id) {

        WeightEvent weightEvent = weightEventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("weight event", "id", id));

        return weightEvent;
    }
}
