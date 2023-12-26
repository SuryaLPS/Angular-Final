import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.scss'
})
export class EmployeeDashboardComponent implements OnInit {
  employees: any[] = [];
  
  constructor(private sharedService: SharedService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.sharedService.employeeData$.subscribe((data) => {
      this.employees = data;
    });

    this.sharedService.employeeUpdated$.subscribe(() => {
      // Refresh employee data when an employee is updated
      this.employees = [...this.employees];
    });
  
    this.sharedService.formUpdate$.subscribe((updatedData) => {
      if (updatedData) {
        // Update the employee details in the list
        const index = this.employees.findIndex((emp) => emp.id === updatedData.id);
        if (index !== -1) {
          this.employees[index] = updatedData;

          // Make a copy of the array to trigger change detection
          this.employees = [...this.employees];
        }
      }
    });

  }

  editEmployee(employee: any) {
    
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: employee // Pass the selected employee to the edit component
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Update the employee details in the list
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
          this.employees[index] = result;
        }
      }

      // Navigate back to the dashboard after closing the edit page
      // this.router.navigate(['/employee-dashboard']);
    });
  }
}
