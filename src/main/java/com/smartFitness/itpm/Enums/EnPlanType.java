package com.smartFitness.itpm.Enums;

public class EnPlanType {
    public String enPlanType(int typeNo) {
        switch(typeNo) {
            case 1:
                return "Weight Lost Diet Plan";
            case 2:
                return "Maintainance Diet Plan";
            case 3:
                return "Weight gain Diet Plan";
            default:
                return "Invalid Type";
        }
    }
}
