import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionRoutingModule } from './nutrition-routing.module';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { HealthyRecipesComponent } from './healthy-recipes/healthy-recipes.component';
import { FoodFactsComponent } from './food-facts/food-facts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from '../user/user-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxGaugeModule } from 'ngx-gauge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { CustomFormsModule } from 'ngx-custom-validators';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    
    DietPlanComponent,
    HealthyRecipesComponent,
    FoodFactsComponent
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
    NutritionRoutingModule,
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
export class NutritionModule { }
