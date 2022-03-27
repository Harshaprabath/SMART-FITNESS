import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceRoutingModule } from './user-service-routing.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurSchedulesComponent } from './our-schedules/our-schedules.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';



@NgModule({
  declarations: [ 
    OurServicesComponent,   
    OurSchedulesComponent,
    BmiCalculatorComponent
  ],
  imports: [
    CommonModule,
    UserServiceRoutingModule
  ]
})
export class UserServiceModule { }
