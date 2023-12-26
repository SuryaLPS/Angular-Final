import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private employeeDataSubject = new BehaviorSubject<any[]>([]);
  employeeData$ = this.employeeDataSubject.asObservable();

  private employeeUpdated = new BehaviorSubject<any>(null);
  employeeUpdated$ = this.employeeUpdated.asObservable();

  private leaveStatusUpdated = new Subject<string>();
  leaveStatusUpdated$ = this.leaveStatusUpdated.asObservable();

  private formUpdateSubject = new BehaviorSubject<any>(null);
  formUpdate$ = this.formUpdateSubject.asObservable();

  constructor() { }

  updateEmployeeData(data: any[]) {
    this.employeeDataSubject.next(data);
  }

  updateLeaveStatus(status: string) {
    this.leaveStatusUpdated.next(status);
  }

  updateForm(data: any) {
    this.formUpdateSubject.next(data);
  }

  updateEmployee() {
    this.employeeUpdated.next(null);
  }

}
