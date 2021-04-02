import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule } from '@angular/forms';
// import { EmpValidateComponent } from './emp-validate/emp-validate.component';
import { ProudctListingComponent } from './proudct-listing/proudct-listing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { from } from 'rxjs';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PhonebookComponent } from './phonebook/phonebook.component';


@NgModule({
  declarations: [
     AppComponent,
    // AddEmpComponent,
    //EmpValidateComponent,
    ProudctListingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    WeatherComponent,
    AddContactComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
