import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { HomeComponent } from './home.component';

 const routes: Routes = [
     {
         path: '',
         component: HomeComponent,
    children:[
     {
         path: 'users',
         component: UsersComponent
     },
     {
         path: 'technologies',
         component: TechnologiesComponent
     }]}

]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
  })
  export class HomeRoutingModule { }