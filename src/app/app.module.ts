import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Capitalize } from './pipes/capitalize';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import { MentorSkillsComponent } from './mentor-skills/mentor-skills.component';
import { MentorCalendarComponent } from './mentor-calendar/mentor-calendar.component';
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

import { UserMgtComponent } from './user-mgt/user-mgt.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { HomeModule } from './home/home.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RequestOptions } from '@angular/http';
import { AuthRequestOptions } from './service/authrequestoptions.service';
import { AuthErrorHandler } from './service/autherrorhandler.service';
import { AuthService } from './service/auth.service';
import { SearchService } from './service/search.service';
import { TrainingService } from './service/training.service';
import { TechnologyService } from './service/technology.service';
import { PaymentService } from './service/payment.service';



@NgModule({
  declarations: [
    AppComponent,
    
    RegisterComponent,
    LoginComponent,
    Capitalize,
    MentorSkillsComponent,
    MentorCalendarComponent,
    AlertComponent,
    HomepageComponent,
    UserMgtComponent,
    NotificationsComponent,
    MentorRegisterComponent,

   
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
    AuthGuard,
    HomeGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // {provide: , useClass: AuthService , multi: true}  ,
    // {provide: HTTP, useClass: ErrorInterceptor, multi: true},
    // fakeBackendProvider,
      {
        provide: RequestOptions, 
        useClass: AuthRequestOptions
      },
      {
        provide: ErrorHandler, 
        useClass: AuthErrorHandler
      },
      SearchService,
      TrainingService,
      TechnologyService,
      PaymentService,
      AuthService,
      ApiService
  ],
  entryComponents: [ViewProfileComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
