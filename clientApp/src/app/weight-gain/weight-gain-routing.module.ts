import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisePlansComponent } from './exercise-plans/exercise-plans.component';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './schedules/schedules.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
{
  path: 'exercise-plans',
  component: ExercisePlansComponent,
},
{
  path: 'schedules',
  component: SchedulesComponent,
},
{
  path: 'special-events',
  component: SpecialEventsComponent,
},
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightGainRoutingModule { }
