package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IPlanService;
import com.smartFitness.itpm.Models.Plan;
import com.smartFitness.itpm.Repositories.PlanRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlanService implements IPlanService {

    @Autowired
    private PlanRepository planRepository;


    @Override
    public List<Plan> findAllPlans() {
        List<Plan> plans = (List<Plan>) planRepository.findAll();

        List<Plan> ActivePlans = new ArrayList<>();
        for(int i=0;i<plans.size();i++){

            Plan plan = plans.get(i);

            if (plan.isActive()) {
                ActivePlans.add(plan);
            }
        }
        return ActivePlans;
    }

    @Override
    public Response deletePlans(Integer plansId) {

        Response response = new Response();
        Plan plan = planRepository.findById(plansId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan", "id", plansId));

        if(plan != null) {
            plan.setActive(false);
            planRepository.save(plan);

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
    public Response savePlan(Plan NewPlan) {

        Response response = new Response();

        if(NewPlan.getId() == null) {
            planRepository.save(NewPlan);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewPlan.getId() != null){

            planRepository.save(NewPlan);
            response.isSuccess = true;
            response.message = "Successfully Update";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }

        return response;
    }

    @Override
    public Plan findById(Integer planId) {

        Plan plan = planRepository.findById(planId)
                .orElseThrow(() -> new ResourceNotFoundException("Plan", "id", planId));
        return plan;
    }
}
