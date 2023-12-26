import { Component } from '@angular/core';
import { LeaveApplicationService } from '../leave-application.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrl: './leave-application.component.scss'
})
export class LeaveApplicationComponent {
  leaveApplication = {
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: ''
  };

  constructor(private leaveApplicationService: LeaveApplicationService) {}


  submitLeaveApplication() {
    this.leaveApplicationService.submitLeaveApplication(this.leaveApplication)
      .subscribe(
        (response) => {
          console.log('Leave Application Submitted:', response);

          
          // Reset the form
          this.resetForm();

          alert('Leave application submitted successfully!');
        },
        (error) => {
          console.error('Error submitting leave application:', error);
        }
      );
  }


  resetForm() {
    // Reset form fields
    this.leaveApplication = {
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: ''
    };
  }
}
