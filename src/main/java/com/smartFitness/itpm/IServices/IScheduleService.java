package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Schedule;

import com.smartFitness.itpm.ViewModel.Response;

import java.util.List;

public interface IScheduleService {

    public List<Schedule> findAllSchedule();

    Response saveSchedule(Schedule NewSchedule);

    public Schedule findById(Integer scheduleId);

    Response deleteSchedule(Integer scheduleId);

}


