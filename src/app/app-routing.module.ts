import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { EmployeeDetailComponent } from './hr-dashboard/employee-detail/employee-detail.component';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './hr-dashboard/create-employee/create-employee.component';
import { LeaveDetailsComponent } from './employee-dashboard/leave-details/leave-details.component';
import { EditProfileComponent } from './employee-dashboard/edit-profile/edit-profile.component';
import { LeaveApplicationComponent } from './employee-dashboard/leave-application/leave-application.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'hr-dashboard', component: HrDashboardComponent, canActivate: [AuthGuard] },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employee-detail', component: EmployeeDetailComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'leave-details', component: LeaveDetailsComponent },
  { path: 'edit-profile/:id', component: EditProfileComponent},
  { path: 'leave-application', component: LeaveApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
