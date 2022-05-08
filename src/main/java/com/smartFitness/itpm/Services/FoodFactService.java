package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IFoodFactService;
import com.smartFitness.itpm.Models.FoodFact;
import com.smartFitness.itpm.Repositories.FoodFactRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodFactService implements IFoodFactService {


    @Autowired
    private FoodFactRepository foodFactRepository;


    // get all food facts details
    @Override
    public List<FoodFact> findAllFoodFacts() {
        List<FoodFact> foodFacts = (List<FoodFact>) foodFactRepository.findAll();

        List<FoodFact> ActiveFoodFacts = new ArrayList<>();
        for(int i=0;i<foodFacts.size();i++){

            FoodFact foodFact = foodFacts.get(i);

            if (foodFact.isActive()) {
                ActiveFoodFacts.add(foodFact);
            }
        }
        return ActiveFoodFacts;
    }

    // delete food facts details
    @Override
    public Response deleteFoodFacts(Integer foodFactId) {
        Response response = new Response();
        FoodFact foodFact = foodFactRepository.findById(foodFactId)
                .orElseThrow(() -> new ResourceNotFoundException("FoodFact", "id", foodFactId));

        if(foodFact != null) {
            foodFact.setActive(false);
            foodFactRepository.save(foodFact);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }

    // save food facts details
    @Override
    public Response saveFoodFact(FoodFact newFoodFact) {
        Response response = new Response();

        if(newFoodFact.getId() == null) {
            foodFactRepository.save(newFoodFact);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(newFoodFact.getId() != null){

            foodFactRepository.save(newFoodFact);
            response.isSuccess = true;
            response.message = "Successfully Updated";
        }
        else{
            response.isSuccess = false;
            response.message = "Save not success";
        }

        return response;
    }

    // get a single food facts detail
    @Override
    public FoodFact findFoodFactById(Integer foodFactId) {
        FoodFact foodFact = foodFactRepository.findById(foodFactId)
                .orElseThrow(() -> new ResourceNotFoundException("FoodFact", "id", foodFactId));
        return foodFact;
    }

    //search food facts details by name
    @Override
    public List<FoodFact> foodFactSearch(String foodName){

        return foodFactRepository.foodFactSearch(foodName);

    }
}

