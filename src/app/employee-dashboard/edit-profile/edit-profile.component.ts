import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { UserService } from '../user.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit{
  @Input() employee: any;
  editForm!: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditProfileComponent>,@Inject(MAT_DIALOG_DATA) private data: any,private userService: UserService, private sharedService: SharedService) {}

    ngOnInit() {
      this.editForm = this.fb.group({
        id: [this.data?.id || '', Validators.required],
        role: [this.data?.role || '', Validators.required],
        name: [this.data?.name || '', Validators.required],
        age: [this.data?.age || '', Validators.required],
        dob: [this.data?.dob || '', Validators.required],
        bloodgroup: [this.data?.bloodgroup || '', Validators.required],
        gender: [this.data?.gender || '', Validators.required],
        email: [this.data?.email || '', [Validators.required, Validators.email]],
        number: [this.data?.number || '', Validators.required],
      });
    }

 
  


updateProfile() {
  if (this.editForm.valid) {
    const updatedProfile = this.editForm.value;

    // Update the employee data in the server
    this.userService.updateUser(updatedProfile).subscribe(
      (response) => {
        // Notify other components that employee data is updated
        this.sharedService.updateEmployee();
        // Close the dialog
        this.dialogRef.close(response);
      },
      (error) => {
        console.error('Error updating employee:', error);
      }
    );
  }


}

}


