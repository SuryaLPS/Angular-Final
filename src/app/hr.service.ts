import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService {
  private employeeList: any[] = [];

  constructor() {
    this.employeeList = [
      { id: '1', name: 'Bella Swan', dateOfBirth: new Date('2000-01-15'), imagePath: './assets/Images/bella.jpg', bloodgroup: 'A+', gender: 'Female', email: 'bella.abc@gmail.com', number: '456789003', status: 'Pending', leaveduration: '10', leavetype: 'Vacation', leaveStart: '09/12/2023', leaveEnd: '19/12/2023', },
      { id: '2', name: 'Edward Cullen', dateOfBirth: new Date('1997-03-22'), imagePath: './assets/Images/edward.jpg', bloodgroup: 'O+', gender: 'Male', email: 'edward.abc@gmail.com', number: '987654003', status: 'Pending', leaveduration: '2', leavetype: 'Sick', leaveStart: '15/12/2023', leaveEnd: '17/12/2023',},
      { id: '3', name: 'Alice Cullen', dateOfBirth: new Date('1998-12-06'), imagePath: './assets/Images/alice.jpg', bloodgroup: 'B+', gender: 'Female', email: 'alice.abc@gmail.com', number: '256899003', status: 'Pending', leaveduration: '3', leavetype: 'Casual', leaveStart: '09/12/2023', leaveEnd: '12/12/2023', },
      { id: '4', name: 'Jasper Hale', dateOfBirth: new Date('1998-05-03'), imagePath: './assets/Images/jasper.jpg', bloodgroup: 'O-', gender: 'Male', email: 'jasper.abc@gmail.com', number: '645321003', status: 'Pending', leaveduration: '10', leavetype: 'Vacation', leaveStart: '09/12/2023', leaveEnd: '19/12/2023', },
      { id: '5', name: 'Jacob Black', dateOfBirth: new Date('2000-08-27'), imagePath: './assets/Images/jacob.jpg', bloodgroup: 'A-', gender: 'Male', email: 'jacob.abc@gmail.com', number: '567895003', status: 'Pending', leaveduration: '5', leavetype: 'Casual', leaveStart: '09/12/2023', leaveEnd: '14/12/2023', },

    ];
    
  }

  

  getEmployeeList(): any[] {
    return this.employeeList;
  }

  getEmployeeById(id: string): any {
    return this.employeeList.find(employee => employee.id === id);
  }

  deleteEmployee(id: string): void {
    const index = this.employeeList.findIndex(employee => employee.id === id);
    if (index !== -1) {
      this.employeeList.splice(index, 1);
    }
  }
  
  updateEmployee(updatedEmployee: any): void {
    // Find the index of the employee in the array
    const index = this.employeeList.findIndex(
      (employee) => employee.id === updatedEmployee.id
    );

    if (index !== -1) {
      // Update the employee in the array
      this.employeeList[index] = updatedEmployee;
    }
  }
  
   }

