import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: ServiceService, private router: Router) { }

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please provide both username and password.';
      console.log("email: ", this.email);
      console.log("Password: ", this.password);
      return;
    }

    this.authService.authenticateUser({ email: this.email, password: this.password })
    .subscribe(
      response => {
        this.errorMessage = '';
        
        if (response.status === 'success') {
          console.log('Login successful');
          
          if (response.token) { // Assuming the response contains a 'token' field
            this.authService.setToken(response.token); // Save the token
            // this.router.navigate(['/user/about']); // Navigate to the desired route
          } else {
            console.error('Token not found in response.');
            this.errorMessage = 'An error occurred during authentication.';
          }
        } else {
          this.errorMessage = response.message || 'Login failed. Please try again.';
        }
      },
      error => {
        this.errorMessage = 'Authentication failed. Please check your credentials and try again.';
      }
    );
  
  }
}
