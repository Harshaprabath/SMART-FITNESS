package com.smartFitness.itpm.Controllers;

import com.itextpdf.text.DocumentException;

import com.smartFitness.itpm.Models.Plan;
import com.smartFitness.itpm.PDFExporter.PlanPDFExporter;
import com.smartFitness.itpm.Services.PlanService;
import com.smartFitness.itpm.ViewModel.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/plan")
public class PlanController {

    @Autowired
    private PlanService planService;

    // get all plan
    @GetMapping("/all")
    public List<Plan> findAllPlans() {

        return planService.findAllPlans();
    }

    // Delete plan
    @DeleteMapping("/delete/{id}")
    public Response deletePlans(@PathVariable(value = "id") Integer planId) {

        return planService.deletePlans(planId);
    }

    // add and update plan
    @PostMapping("/save")
    public Response savePlan(@Valid @RequestBody Plan plan) {

        return planService.savePlan(plan);
    }

    // Get a Single plan
    @GetMapping("/find/{id}")
    public Plan getPlanById(@PathVariable(value = "id") Integer planId) {

        return planService.findById(planId);
    }

    @GetMapping("/export/pdf")
    public void exportToPDF(HttpServletResponse response) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss") ;
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=DietPlans_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        List<Plan> listAllPlans = planService.listAllPlans();

        PlanPDFExporter exporter = new PlanPDFExporter(listAllPlans);
        exporter.export(response);

    }
}
