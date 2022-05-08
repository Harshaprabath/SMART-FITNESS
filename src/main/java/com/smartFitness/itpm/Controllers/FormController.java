package com.smartFitness.itpm.Controllers;

import com.smartFitness.itpm.Exceptions.ResourceNotFoundException;
import com.smartFitness.itpm.Models.Form;
import com.smartFitness.itpm.Services.FormService;
import com.smartFitness.itpm.ViewModel.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/form")
public class FormController {

    @Autowired
    private FormService formService;


    // Get a Single form
    @GetMapping("/find/{id}")
    public Form getFormById(@PathVariable(value = "id") Integer formId) {
        return formService.findById(formId);

    }

    // get all form
    @GetMapping("/all")
    public List<Form> findAllForm() {

        return formService.findAllForm();

    }



    // add and update an assistance
    @PostMapping("/save")
    public Response saveForm(@Valid @RequestBody Form form) {

        return formService.saveForm(form);

    }
    // Delete an assistance
    @DeleteMapping("/delete/{id}")
    public Response deleteForm(@PathVariable(value = "id") Integer formId) {

        return formService.deleteForm(formId);

    }

}