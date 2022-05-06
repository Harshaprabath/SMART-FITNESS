import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightGainRoutingModule } from './weight-gain-routing.module';
import { SchedulesComponent } from './schedules/schedules.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { ExercisePlansComponent } from './exercise-plans/exercise-plans.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from '../user/user-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxEchartsModule } from 'ngx-echarts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { CustomFormsModule } from 'ngx-custom-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    SchedulesComponent,
    SpecialEventsComponent,
    ExercisePlansComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    PerfectScrollbarModule,
    NgApexchartsModule,
    NgxGaugeModule,
    NgSelectModule,
    CKEditorModule,
    ArchwizardModule,
    CustomFormsModule,   
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    WeightGainRoutingModule,
  ]
})
export class WeightGainModule { }