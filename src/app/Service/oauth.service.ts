import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private supabase: SupabaseClient;

  constructor(private router: Router) {
    this.supabase = createClient('https://pvqlmzeuajvrtmuuzdwj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2cWxtemV1YWp2cnRtdXV6ZHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MDI4MzEsImV4cCI6MjAzNDE3ODgzMX0.72nwiRTPjEEjUJh0jkrlFqEafhL-gPU0Qo3cC-Hge4Q');
  }

  async signInWithGoogle() {
    try {
      const { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('Error during OAuth sign-in:', error.message);
        return;
      }

      // Assuming data contains the user details after successful authentication
      console.log('User details:', data);

      // Navigate to the home route
      this.router.navigate(['/']);
    } catch (err) {
      console.error('Error during OAuth sign-in:', err);
    }
  }
}
