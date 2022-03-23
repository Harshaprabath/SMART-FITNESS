import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from './our-services/our-services.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { OurSchedulesComponent } from './our-schedules/our-schedules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: 'bmi-calculator',
    component: BmiCalculatorComponent,
  },
  {
    path: 'our-schedules',
    component: OurSchedulesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserServiceRoutingModule { }
