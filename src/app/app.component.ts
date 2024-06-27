import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: ServiceService, private router: Router) {}

  logout() {
    // Call the service method to clear the authentication token
    this.authService.clearToken();
    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
}
