import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UsersComponent } from '../users/users.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { NavbarComponent } from '../navigbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TrainingComponent } from '../training/training.component';
import { CurrentTrainingsComponent } from '../current-trainings/current-trainings.component';
import { ProfileComponent } from '../profile/profile.component';
import { MentorSearchComponent } from '../mentor-search/mentor-search.component';
import { AuthGuard } from '../guards/auth.guard';



@NgModule({
  declarations: [
      HomeComponent,
      UsersComponent,
      TechnologiesComponent,
      NavbarComponent,
      TrainingComponent,
      CurrentTrainingsComponent,
      ProfileComponent,
      MentorSearchComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [NavbarComponent,MentorSearchComponent,HomeComponent],
  bootstrap: []
})
export class HomeModule { }
