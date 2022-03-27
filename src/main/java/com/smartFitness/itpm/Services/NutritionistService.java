package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.INutritionistService;
import com.smartFitness.itpm.Models.Nutritionist;
import com.smartFitness.itpm.Repositories.NutritionistRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NutritionistService implements INutritionistService {

    @Autowired
    private NutritionistRepository nutritionistRepository;


    @Override
    public List<Nutritionist> findAllNutritionists() {

        List<Nutritionist> nutritionists = (List<Nutritionist>) nutritionistRepository.findAll();

        List<Nutritionist> ActiveNutritionists = new ArrayList<>();
        for(int i=0;i<nutritionists.size();i++){

            Nutritionist nutritionist = nutritionists.get(i);

            if (nutritionist.isActive()) {
                ActiveNutritionists.add(nutritionist);
            }
        }
        return ActiveNutritionists;
    }


    @Override
    public Response deleteNutritionists(Integer nutritionistsId) {

        Response response = new Response();
        Nutritionist nutritionist = nutritionistRepository.findById(nutritionistsId)
                .orElseThrow(() -> new ResourceNotFoundException("Nutritionist", "id", nutritionistsId));

        if(nutritionist != null) {
            nutritionist.setActive(false);
            nutritionistRepository.save(nutritionist);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }

    @Override
    public Response saveNutritionist(Nutritionist NewNutritionist) {

        Response response = new Response();

        if(NewNutritionist.getId() == null) {
            nutritionistRepository.save(NewNutritionist);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewNutritionist.getId() != null){

            nutritionistRepository.save(NewNutritionist);
            response.isSuccess = true;
            response.message = "Successfully Update";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }

        return response;
    }

}
