import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { AuthService } from './auth.service';
import { EmployeeDetailComponent } from './hr-dashboard/employee-detail/employee-detail.component';
import { CreateEmployeeComponent } from './hr-dashboard/create-employee/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HrService } from './hr.service';
import { NgChartsModule } from 'ng2-charts';
import { EmployeeService } from './hr-dashboard/employee.service';
import { CreateService } from './create.service';
import { SharedService } from './employee-dashboard/shared.service';
import { LeaveDetailsComponent } from './employee-dashboard/leave-details/leave-details.component';
import { EditProfileComponent } from './employee-dashboard/edit-profile/edit-profile.component';
import { UserService } from './employee-dashboard/user.service';
import { LeaveApplicationComponent } from './employee-dashboard/leave-application/leave-application.component';
import { LeaveApplicationService } from './employee-dashboard/leave-application.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeDashboardComponent,
    HrDashboardComponent,
    EmployeeDetailComponent,
    CreateEmployeeComponent,
    LeaveDetailsComponent,
    EditProfileComponent,
    LeaveApplicationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgChartsModule,
    
  ],
  providers: [AuthService, HrService, CreateService, EmployeeService, SharedService, UserService, LeaveApplicationService],
  bootstrap: [AppComponent]

})
export class AppModule { }
