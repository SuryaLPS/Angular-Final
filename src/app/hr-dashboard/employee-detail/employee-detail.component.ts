import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from '../../hr.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit  {
  employeeList: any[]= [];
  
 
  

  constructor(private hrService: HrService, private router: Router) { }
  
  
  ngOnInit() {
    // service to fetch the list of all employees
    this.employeeList = this.hrService.getEmployeeList();

  }

  calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  

  
  deleteEmployee(employeeId: string): void {
    this.hrService.deleteEmployee(employeeId);
    this.employeeList = this.hrService.getEmployeeList();
  }
  
}

  
