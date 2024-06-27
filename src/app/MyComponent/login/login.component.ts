import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: ServiceService, private router: Router) { }

 
  login() {
    
    if (!this.username || !this.password) {
      this.errorMessage = 'Please provide both username and password.';
      console.log("Username: ", this.username);
    console.log("Password: ", this.password);
    return;
      
    }
  
    this.authService.authenticateUser({ username: this.username, password: this.password })
      .subscribe(
        response => {
          this.errorMessage = '';
          console.log('Login successful');
          if (response.token) {
            console.log(response.token);
            
            this.authService.setToken(response.token); // Set token here
            this.router.navigate(['/user/about']);
          } else {
            console.error('Token not found in response.');
            this.errorMessage = 'An error occurred during authentication.';
          }
        },
        error => {
          this.errorMessage = 'Authentication failed. Please check your credentials and try again.';
        }
      );
  }
  
}
