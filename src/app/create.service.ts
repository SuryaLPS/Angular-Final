import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './employee-dashboard/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  private apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  private employees: any[] = [];

  addEmployee(employee: any) {
    //save new emp to the server
    this.http.post(this.apiUrl, employee).subscribe((response: any) => {
      //update the local employees array with res from the server
    this.employees.push(employee);
    this.sharedService.updateEmployeeData(this.employees);

  },

  (error: any) => {
    console.error('Failed to adding employees:', error);
  }
    );
  }


  getEmployees() {
    return this.employees;
  }
}
