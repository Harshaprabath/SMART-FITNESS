package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IScheduleService;
import com.smartFitness.itpm.Models.Assistance;
import com.smartFitness.itpm.Models.Schedule;
import com.smartFitness.itpm.Repositories.ScheduleRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ScheduleService implements IScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;


    @Override
    public List<Schedule> findAllSchedule() {

        List<Schedule> schedules = (List<Schedule>) scheduleRepository.findAll();

        List<Schedule> ActiveSchedules = new ArrayList<>();
        for(int i=0;i<schedules.size();i++){

            Schedule schedule = schedules.get(i);

            if (schedule.isActive()) {
                ActiveSchedules.add(schedule);
            }
        }
        return ActiveSchedules;
    }


    @Override
    public Response deleteSchedule(Integer schedulesId) {

        Response response = new Response();
        Schedule schedule = scheduleRepository.findById(schedulesId)
                .orElseThrow(() -> new ResourceNotFoundException("Schedule", "id", schedulesId));

        if(schedule != null) {
            schedule.setActive(false);
            scheduleRepository.save(schedule);

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
    public Response saveSchedule(Schedule NewSchedule) {

        Response response = new Response();

        if(NewSchedule.getId() == null) {
            scheduleRepository.save(NewSchedule);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewSchedule.getId() != null){

            scheduleRepository.save(NewSchedule);
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
    public Schedule findById(Integer scheduleId) {

        Schedule  schedule = scheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("schedule", "id", scheduleId));
        return  schedule;

    }

}
