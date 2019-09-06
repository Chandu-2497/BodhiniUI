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



@NgModule({
  declarations: [
      HomeComponent,
      UsersComponent,
      TechnologiesComponent,
      NavbarComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [NavbarComponent],
  bootstrap: []
})
export class HomeModule { }
