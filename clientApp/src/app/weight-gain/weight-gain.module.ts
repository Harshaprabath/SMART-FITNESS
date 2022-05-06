import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightGainRoutingModule } from './weight-gain-routing.module';
import { SchedulesComponent } from './schedules/schedules.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { ExercisePlansComponent } from './exercise-plans/exercise-plans.component';



@NgModule({
  declarations: [
    SchedulesComponent,
    SpecialEventsComponent,
    ExercisePlansComponent
  ],
  imports: [
    CommonModule,
    WeightGainRoutingModule
  ]
})
export class WeightGainModule { }
