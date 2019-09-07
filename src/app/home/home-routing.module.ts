import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../profile/profile.component';
import { TrainingComponent } from '../training/training.component';
import { CurrentTrainingsComponent } from '../current-trainings/current-trainings.component';
import { MentorSearchComponent } from '../mentor-search/mentor-search.component';
import { PaymentsComponent } from '../payments/payments.component';
import { TransactionComponent } from '../transaction/transaction.component';


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
     },
    {
        path: 'edit',
        component: ProfileComponent
    },
    {
        path: 'completed',
        component: TrainingComponent
    },
    {
        path: 'mentors/:technology/:from/:to',
        component: MentorSearchComponent,
    },
    {
        path: 'pay',
        component: PaymentsComponent
    },
    {
        path: 'transaction',
        component: TransactionComponent
    },
    {
        path:'**',
        redirectTo: 'dashboard'
    },
    {
        path: 'current',
        component: CurrentTrainingsComponent
    }]}

]
@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    
  })
  export class HomeRoutingModule { }