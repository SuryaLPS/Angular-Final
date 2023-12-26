import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }

  getUserById(employeesId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employees/${employeesId}`);
  }

  addUser(employees: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, employees);
  }

  updateUser(employees: any): Observable<any> {
    console.log('Updating Employees:', employees);
    return this.http.put<any>(`${this.apiUrl}/employees/${employees.id}`, employees);
  }

  deleteUser(employeesId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${employeesId}`);
  }
}
