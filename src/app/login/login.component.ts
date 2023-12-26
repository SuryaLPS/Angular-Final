import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  role: string = ' ';

  constructor(private authService: AuthService, private router: Router) {}

  login(role: string, username: string, password: string): void {
    const isAuthenticated = this.authService.authenticate(role, username, password);

    if (isAuthenticated) {
      if (role === 'hr') {
        this.router.navigate(['/hr-dashboard']);
        console.log (username)
      } else if (role === 'employee') {
        this.router.navigate(['/employee-dashboard']);
        console.log (username)

      }
    } else {
      alert('Invalid Username or Password');
      console.log('Authentication Failed');
    }
  }



}

