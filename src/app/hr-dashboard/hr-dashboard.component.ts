import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { EmployeeService } from './employee.service';
import { SharedService } from '../employee-dashboard/shared.service';
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrl: './hr-dashboard.component.scss'
})
export class HrDashboardComponent implements OnInit  {
  doughnutChart: any;
  barChart: any;
  employeeList: any[] = [];

  showAddEmployeeForm: boolean = false;
  newEmployee: any = { id: '', name: '', leaveType: '', leaveStart: '', leaveEnd: '', leaveDuration: '' }; 



  constructor(private employeeService: EmployeeService, private sharedService: SharedService) {}

  ngOnInit() {
    const activeEmployeeCount = 80;
    const inactiveEmployeeCount = 20;
    const leavesData = [5, 8, 3, 12, 6];
    this.generateDoughnutChart(activeEmployeeCount, inactiveEmployeeCount);
    this.generateBarChart(leavesData);
    this.employeeList = this.employeeService.getEmployeeList();

  }
   generateDoughnutChart(activeCount: number, inactiveCount: number) {
    this.doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Active Employees', 'Inactive Employees'],
        datasets: [{
          data: [80, 20],
          backgroundColor: ['#36A2EB', '#FF6384'],
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      } as any
    });
  }
   
  generateBarChart(leavesData: number[]) {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5'], // Replace with actual employee names
        datasets: [{
          label: 'Total Leaves Taken',
          data: leavesData,
          backgroundColor: '#36A2EB',
          borderColor: 'rgba(70, 192, 190, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }

  approveLeave(employee: any) {
    // Update leave status locally
    employee.leaveStatus = 'Approved';

    
    // Update leave status on the server
    this.employeeService.updateLeaveStatus(employee.id, 'Approved').subscribe(
      response => {
        // Handle success response from the server if needed
        console.log('Leave Approved successfully');

        this.sharedService.updateLeaveStatus('Approved');

      },
      error => {
        // Handle error from the server if needed
        console.error('Error approving leave', error);
      }
    );
  }

  rejectLeave(employee: any) {
    // Update leave status locally
    employee.leaveStatus = 'Rejected';

    // Update leave status on the server
    this.employeeService.updateLeaveStatus(employee.id, 'Rejected').subscribe(
      response => {
        // Handle success response from the server if needed
        console.log('Leave Rejected successfully');

        this.sharedService.updateLeaveStatus('Rejected');

      },
      error => {
        // Handle error from the server if needed
        console.error('Error rejecting leave', error);
      }
    );
  }

  openAddEmployeeForm() {
    // Show the Add Employee form
    this.showAddEmployeeForm = true;
  }

  addEmployee() {
    // Validate form input
    if (!this.validateForm()) {
      // Handle form validation error.)
      return;
    }
  
    // Add the new employee 
    this.employeeList.push({
      id: this.newEmployee.id,
      name: this.newEmployee.name,
      leaveType: this.newEmployee.leaveType,
      leaveStart: this.newEmployee.leaveStart,
      leaveEnd: this.newEmployee.leaveEnd,
      leaveDuration: this.newEmployee.leaveDuration,
      leaveStatus: 'Pending'
    });
  
    // Call the service to add the new employee and handle the observable if needed
    this.employeeService.addEmployee(this.newEmployee).subscribe(
      response => {
        // Handle success response from the server if needed
        console.log('Employee added successfully');
      },
      error => {
        // Handle error from the server if needed
        console.error('Error adding employee', error);
      }
    );
  
    // Hide the Add Employee form after submission
    this.showAddEmployeeForm = false;
  
    // Clear the form for the next entry
    this.newEmployee = { id: '', name: '', leaveType: '', leaveDuration: '' };
  }




  private validateForm(): boolean {
    //  if the required fields are not empty

    return !!this.newEmployee.id && !!this.newEmployee.name &&
           !!this.newEmployee.leaveType && !!this.newEmployee.leaveDuration;
  }

  

  
  

}
