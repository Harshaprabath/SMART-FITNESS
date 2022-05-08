import { UserServiceRoutingModule } from './user-service-routing.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurAgendasComponent } from './our-agendas/our-agendas.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [ 
    OurServicesComponent,   
    OurAgendasComponent,
    BmiCalculatorComponent
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
    CommonModule,
    UserServiceRoutingModule,
    NgSelectModule,
    CKEditorModule,
    ArchwizardModule,
    CustomFormsModule,   
    FormsModule,
    ReactiveFormsModule,
    NgbModule ,
    ToastrModule.forRoot(),
  ]
})
export class UserServiceModule { }
