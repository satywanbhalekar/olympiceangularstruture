import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponent/about/about.component';
import { ApiComponent } from './MyComponent/api/api.component';
import { FormComponent } from './MyComponent/form/form.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { SignupComponent } from './MyComponent/signup/signup.component';
import { UpdateComponent } from './MyComponent/update/update.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard
import { PagenotfoundComponent} from './MyComponent/pagenotfound/pagenotfound.component';
import { OauthComponent } from './MyComponent/oauth/oauth.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'rforms', component: ReactiveFormsComponent },

  { path: 'user/about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent },
  { path: 'api', component: ApiComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'oauth', component: OauthComponent },
  { path: '**', pathMatch: 'full',  
  component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
