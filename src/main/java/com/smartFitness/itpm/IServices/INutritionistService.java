package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Nutritionist;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface INutritionistService {

    public List<Nutritionist> findAllNutritionists();
    public Response deleteNutritionists(Integer nutritionistsId);
    public Response saveNutritionist(Nutritionist nutritionist);
}
