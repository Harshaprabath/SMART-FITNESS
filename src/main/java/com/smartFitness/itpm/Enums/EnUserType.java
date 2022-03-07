package com.smartFitness.itpm.Enums;

public class EnUserType {
    public String enUserType(int typeNo) {
        switch(typeNo) {
            case 1:
                return "Admin";
            case 2:
                return "Weight Trainer";
            case 3:
                return "Cardio Trainer";
            case 4:
                return "Nutritionist";
            case 5:
                return "Customer";
            default:
                return "Invalid Type";
        }
    }
}
