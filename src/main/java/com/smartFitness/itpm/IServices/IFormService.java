package com.smartFitness.itpm.IServices;

import com.smartFitness.itpm.Models.Form;

import com.smartFitness.itpm.ViewModel.Response;


import java.util.List;

public interface IFormService {

    public List<Form> findAllForm();

    Response saveForm(Form NewForm);

    public Form findById(Integer formId);

    Response deleteForm(Integer formId);

}
