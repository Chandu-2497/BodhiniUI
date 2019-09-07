import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { MentorRegisterComponent } from './mentor-register/mentor-register.component';


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
    //Lazy Loading
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
    path:'mentors/:technology/:from/:to',
    component: MentorSearchComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
