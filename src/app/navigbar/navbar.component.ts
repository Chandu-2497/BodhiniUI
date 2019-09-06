import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navigbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  isLogin: boolean = false;
  role: string ='Admin';
  technology = new FormControl;
  mentorSearchForm : FormGroup;
  technologies: any[] ;
  // = [{id:1,name:'Spring Boot'},{id:2,name:'Angular'},{id:3,name:'Core Java'},{id:4,name:'Advanced Java'}];
  filteredOptions: any[] = this.technologies;


  constructor(private router: Router,
    private formBuild: FormBuilder,
    private authenticationService: AuthenticationService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.getUser();
    this.technologies = this.apiService.getAllTechnologies();
    this.mentorSearchForm = this.formBuild.group({
      technology: ['']
    })
    
  }


  getUser(){
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if( this.user){
      this.isLogin = true;
      this.role = this.user.role;
    }
  }

  search(){
    // this.technology.setValue(this.technologies.find(item => item == this.technology.value).id)
      this.router.navigate(['/mentors',this.technology.value]);
    
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.getUser();
  }

}
