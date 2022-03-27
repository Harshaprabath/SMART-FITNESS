import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { UsersListComponent } from './users-list/users-list/users-list.component';
import { UserFeedbackComponent } from './user-feedback/user-feedback/user-feedback.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    UserProfileComponent,
    UsersListComponent,
    UserFeedbackComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    UserRoutingModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts'), }),
    PerfectScrollbarModule,
    NgApexchartsModule,
    NgxGaugeModule,
    NgxDatatableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),

  ]
})
export class UserModule {}
