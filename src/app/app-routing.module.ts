import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { Test2Component } from './test2/test2.component';
import { LoginComponent } from './login/login.component';
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeGuard } from './guards/home.guard';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';
import { UsersComponent } from './users/users.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeModule} from './home/home.module';


const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomepageComponent,
  },
  {
    path:'dashboard',
    // component: HomeComponent,
    loadChildren : './home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'mentor',
    component: MentorRegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'mentors/:technology',
    component: MentorSearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
