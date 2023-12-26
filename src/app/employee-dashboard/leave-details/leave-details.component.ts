import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../hr-dashboard/employee.service';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.scss'
})
export class LeaveDetailsComponent implements OnInit  {
  leaveStatusSubscription: Subscription | undefined;
  employeeList: any[] = [];

  constructor(private sharedService: SharedService, private employeeService: EmployeeService) {}

  ngOnInit(){

    // Subscribe to leave status updates
    this.leaveStatusSubscription = this.sharedService.leaveStatusUpdated$.subscribe((status) => {
      // Update employeeList based on the received status
      this.updateEmployeeList(status);
    });

    // Fetch initial employee list
    this.employeeList = this.employeeService.getEmployeeList();
  }

  updateEmployeeList(status: string) {
    // filter only 'Approved' or 'Rejected' records and update the local employeeList
    this.employeeList = this.employeeList.map((employee) => {

      
     if (employee.leaveStatus === 'Pending') {
        employee.leaveStatus = status;
      }
     return employee;
    });
  }

    
} 


