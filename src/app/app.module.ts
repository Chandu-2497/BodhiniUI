import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { ToastrModule } from 'ngx-toastr';
// MDB Angular Free
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule, MDBBootstrapModule } from 'angular-bootstrap-md'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { Test2Component } from './test2/test2.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Capitalize } from './pipes/capitalize';
import { StudentsService } from './service/students.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { TrainingComponent } from './training/training.component';
import { MentorSkillsComponent } from './mentor-skills/mentor-skills.component';
import { MentorCalendarComponent } from './mentor-calendar/mentor-calendar.component';
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AlertService } from './service/alert.service';
import { AlertComponent } from './directives/alert.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiService } from './api.service';
import { HomeGuard } from './guards/home.guard';
import { ProfileComponent } from './profile/profile.component';

import { UserMgtComponent } from './user-mgt/user-mgt.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navigbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    Test2Component,
    RegisterComponent,
    LoginComponent,
    Capitalize,
    
    TrainingComponent,
    MentorSkillsComponent,
    MentorCalendarComponent,
    MentorSearchComponent,
    AlertComponent,
    HomepageComponent,
    ProfileComponent,
  //  NavbarComponent,
    UserMgtComponent,
    
    NotificationsComponent,
    MentorRegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule,
    AmazingTimePickerModule,
    MatAutocompleteModule,
    ToastrModule.forRoot()  ,
    ModalModule.forRoot(),
   
    TooltipModule,
    PopoverModule,
    ButtonsModule   ,
    HomeModule              
  ],
  providers: [
    StudentsService,
    AuthGuard,
    HomeGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true}  ,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
