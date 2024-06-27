import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(private authService: ServiceService, private router: Router) { }

  signup() {
    if (this.validateInput()) {
      this.authService.register(this.username, this.email, this.password).subscribe(
        (response: any) => {
          // Handle successful response, e.g., navigating to the login page
          this.router.navigate(['/login']); // Redirect to login page after successful signup
        },
        (error: any) => {
          // Handle errors, e.g., displaying an error message
          this.errorMessage = error.message;
        }
      );
    }
  }

  private validateInput(): boolean {
    // Check if all fields are filled
    if (!this.username || !this.email || !this.password) {
      this.errorMessage = 'All fields are required.';
      return false;
    }
    // Validate email format
    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address.';
      return false;
    }
    // Validate password strength (example: minimum 6 characters)
    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long.';
      return false;
    }
    return true;
  }

  private validateEmail(email: string): boolean {
    // Simple email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
