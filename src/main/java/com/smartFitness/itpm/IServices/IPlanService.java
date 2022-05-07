package com.smartFitness.itpm.IServices;
import com.smartFitness.itpm.Models.Plan;
import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IPlanService {

    public List<Plan> findAllPlans();
    public Response deletePlans(Integer plansId);
    public Response savePlan(Plan plan);
    public Plan findById(Integer plansId);
}
