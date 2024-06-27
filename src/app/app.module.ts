import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { HelpComponent } from './MyComponent/help/help.component';
import { TwoWayDatabindingComponent } from './MyComponent/two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './MyComponent/form/form.component';
import { StudentlistComponent } from './MyComponent/studentlist/studentlist.component';
import { ServiceService } from './Service/service.service';
import{HttpClientModule} from '@angular/common/http';
import { ApiComponent } from './MyComponent/api/api.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './MyComponent/login/login.component';
import { SignupComponent } from './MyComponent/signup/signup.component';
import { UpdateComponent } from './MyComponent/update/update.component';
import { PagenotfoundComponent } from './MyComponent/pagenotfound/pagenotfound.component';










@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    TwoWayDatabindingComponent,
    FormComponent,
    StudentlistComponent,
    ApiComponent,
    LoginComponent,
    SignupComponent,
    UpdateComponent,
    PagenotfoundComponent,

  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
