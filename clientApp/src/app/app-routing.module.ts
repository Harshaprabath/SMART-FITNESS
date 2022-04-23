import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,

    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
     
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'user-service',
        loadChildren: () =>
          import('./user-service/user-service.module').then((m) => m.UserServiceModule),
      },  
      {
        path: 'nutrition',
        loadChildren: () =>
          import('./nutrition/nutrition.module').then((m) => m.NutritionModule),
      }, 
      {
        path: 'weight-gain',
        loadChildren: () =>
          import('./weight-gain/weight-gain.module').then((m) => m.WeightGainModule),
      }, 
          
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
