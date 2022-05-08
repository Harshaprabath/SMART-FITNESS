package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.FoodFact;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IFoodFactService {

    public List<FoodFact> findAllFoodFacts();
    public Response deleteFoodFacts(Integer foodFactId);
    public Response saveFoodFact(FoodFact newFoodFact);
    public FoodFact findFoodFactById(Integer foodFactId);
    public List<FoodFact> foodFactSearch(String name);
}
