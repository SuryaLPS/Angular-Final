import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList: any[] = [];
  
  private apiUrl = 'http://localhost:3000/employees'; 
  

  constructor(private http: HttpClient) {
    this.employeeList = [
      { id: 1, name: 'Bella Swan', leaveType: 'Vacation', leaveStart: '09/12/2023', leaveEnd: '19/12/2023', leaveDuration: 10, leaveStatus: 'Pending' },
      { id: 2, name: 'Edward Cullen', leaveType: 'Sick', leaveStart: '15/12/2023', leaveEnd: '17/12/2023', leaveDuration: 2, leaveStatus: 'Pending' },
      { id: 3, name: 'Alice Cullen', leaveType: 'Casual', leaveStart: '09/12/2023', leaveEnd: '12/12/2023', leaveDuration: 3, leaveStatus: 'Pending' },
      { id: 4, name: 'Jasper Hale', leaveType: 'Vacation', leaveStart: '09/12/2023', leaveEnd: '19/12/2023', leaveDuration: 10, leaveStatus: 'Pending' },
      { id: 5, name: 'Jacob Black', leaveType: 'Casual', leaveStart: '09/12/2023', leaveEnd: '14/12/2023', leaveDuration: 5, leaveStatus: 'Pending' },
      
    ];

  }
  
 

  getEmployeeList(): any[] {
    return this.employeeList;
  }

  updateLeaveStatus(employeeId: number, newStatus: string): Observable<any> {
    const updateUrl = `${this.apiUrl}/${employeeId}`;

    return this.http.put(updateUrl, { leaveStatus: newStatus });
  }


  addEmployee(newEmployee: any): Observable<any> {
    return this.http.post(this.apiUrl, newEmployee);
  }
}
