package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IWeightService;
import com.smartFitness.itpm.Models.WeightGain;
import com.smartFitness.itpm.Repositories.WeightGainRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeightService implements IWeightService {

    @Autowired
    private WeightGainRepository weightGainRepository;

    @Override
    public List<WeightGain> findAllWeightPlans() {
        List<WeightGain> weightGains = (List<WeightGain>) weightGainRepository.findAll();

        List<WeightGain> activeWeightGains = new ArrayList<WeightGain>();
        for (int i = 0; i < weightGains.size(); i++) {

            WeightGain weightGain = weightGains.get(i);

            if (weightGain.getIsActive())
                activeWeightGains.add(weightGain);
        }

        return activeWeightGains;
    }

    @Override
    public Response saveWeightPlan(WeightGain weightGain) {

       Response response = new Response();

        if (weightGain.getId() == null) {
            weightGainRepository.save(weightGain);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if (weightGain.getId() != null) {
            weightGainRepository.save(weightGain);
            response.isSuccess = true;
            response.message = "Successfully Updated";
        }
        else {
            response.isSuccess = false;
            response.message = "An error occurred";
        }

        return response;
    }

    @Override
    public Response deleteWeightPlan(Integer weightGainId) {

        Response response = new Response();

        WeightGain weightGain = weightGainRepository.findById(weightGainId)
                .orElseThrow(() -> new ResourceNotFoundException("Weight plan", "id", weightGainId));

        if (weightGain != null) {
            weightGain.setIsActive(false);
            weightGainRepository.save(weightGain);

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
    public WeightGain findById(Integer weightGainId) {

        WeightGain weightGain = weightGainRepository.findById(weightGainId)
                .orElseThrow(() -> new ResourceNotFoundException("Weight plan", "id", weightGainId));

        return weightGain;
    }
}
