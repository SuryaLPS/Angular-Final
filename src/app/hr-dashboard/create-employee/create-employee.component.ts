import { Component } from '@angular/core';
import { CreateService } from '../../create.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent {
  employee: any = {};
  employees: any[] = [];
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;


  constructor(private createService: CreateService) {
    this.imagePreview = null;
  }

  submitForm() {
    // to add the employee
    this.createService.addEmployee(this.employee);
   

    // Handle file upload (send to server)
    if (this.selectedFile) {
      console.log('Uploading file:', this.selectedFile);
    }

    // Retrieve all employees after submission
    this.employees = this.createService.getEmployees();

    console.log('Employee Data:', this.employee);

    this.employee = {};
    this.selectedFile = null;
    this.imagePreview = null;
  }

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
  
    // Generate image preview
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target?.result as string | ArrayBuffer | null;
      };
      reader.onerror = (e) => {
        console.error('Error reading image:', e);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      // Reset image preview if no file is selected
      this.imagePreview = null;
    }
  }

}
