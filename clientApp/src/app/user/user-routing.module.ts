import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserFeedbackComponent } from './user-feedback/user-feedback/user-feedback.component';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { UsersListComponent } from './users-list/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'user-feedback',
    component: UserFeedbackComponent,
  },
  {
    path: 'users-list',
    component: UsersListComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
