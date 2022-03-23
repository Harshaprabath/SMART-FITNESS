import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { HealthyRecipesComponent } from './healthy-recipes/healthy-recipes.component';
import { FoodFactsComponent } from './food-facts/food-facts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'diet-plan',
    component: DietPlanComponent,
  },
  {
    path: 'food-facts',
    component: FoodFactsComponent,
  },
  {
    path: 'healthy-recipes',
    component: HealthyRecipesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class NutritionRoutingModule { }
