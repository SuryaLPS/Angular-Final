import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: { role: string, username: string } | null = null;

  authenticate(role: string, username: string, password: string): boolean {
    if (role === 'hr' && username === 'hruser' && password === 'hrpassword') {
      this.authenticatedUser = { role, username };
      return true;
    } else if (role === 'employee' && username === 'employeeuser' && password === 'employeepassword') {
      this.authenticatedUser = { role, username };
      return true;
    } else {
      return false;
    }
  }

  getAuthenticatedUser(): { role: string, username: string } | null {
    return this.authenticatedUser;
  }

  logout(): void {
    this.authenticatedUser = null;
  }
}
