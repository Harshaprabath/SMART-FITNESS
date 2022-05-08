package com.smartFitness.itpm.Services;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.IServices.IFormService;
import com.smartFitness.itpm.Models.Form;
import com.smartFitness.itpm.Repositories.FormRepository;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;



@Service
public class FormService implements IFormService {


    @Autowired
    private FormRepository formRepository;

    private Form form;



    @Override
    public List<Form> findAllForm() {

        List<Form> forms = (List<Form>) formRepository.findAll();

        List<Form> ActiveForms = new ArrayList<>();
        for (int i = 0; i < forms.size(); i++) {

            Form form = forms.get(i);

            if (form.isActive()) {
                ActiveForms.add(form);
            }
        }
        return ActiveForms;

    }
    @Override
    public Response saveForm(Form NewForm) {

        Response response = new Response();

        if(NewForm.getId() == null) {
            formRepository.save(NewForm);
            response.isSuccess = true;
            response.message = "Successfully Saved";
        }
        else if(NewForm.getId() != null){

            formRepository.save(NewForm);
            response.isSuccess = true;
            response.message = "Successfully Updated";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }

        return response;
    }
    @Override
    public Form findById(Integer formId) {

        Form  form = formRepository.findById(formId)
                .orElseThrow(() -> new ResourceNotFoundException("form", "id", formId));
        return  form;

    }
    @Override
    public Response deleteForm(Integer formId) {

        Response response = new Response();
        Form form = formRepository.findById(formId)
                .orElseThrow(() -> new ResourceNotFoundException("Form", "id", formId));

        if(form != null) {
            form.setActive(false);
           formRepository.save(form);

            response.isSuccess = true;
            response.message = "Successfully deleted";
        }
        else{
            response.isSuccess = false;
            response.message = "Unsuccessfully";
        }
        return response;
    }



}




