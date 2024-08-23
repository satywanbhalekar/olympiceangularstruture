import { Component } from '@angular/core';
import { OauthService } from '../../Service/oauth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent {
  constructor(private oauthService: OauthService) {}

  signInWithGoogle() {
    this.oauthService.signInWithGoogle();
   
  }
}
