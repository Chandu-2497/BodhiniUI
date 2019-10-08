import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { TechnologyService } from '../service/technology.service';


@Component({
  selector: 'app-navigbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  path: any;
  user: any;
  isLogin: boolean = false;
  role: string ='Admin';
  technology = new FormControl;
  from = new FormControl;
  to = new FormControl;
  mentorSearchForm : FormGroup;
  technologies: any = [] ;
  // = [{id:1,name:'Spring Boot'},{id:2,name:'Angular'},{id:3,name:'Core Java'},{id:4,name:'Advanced Java'}];
  filteredOptions: any[] = this.technologies;


  constructor(private router: Router,
    private formBuild: FormBuilder,
    private route: ActivatedRoute,
    private techService: TechnologyService,
    private authenticationService: AuthenticationService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    this.getUser();
    this.techService.getAllTechnologies().subscribe(res => {
      if(res)
      this.technologies = res;
    });
    this.mentorSearchForm = this.formBuild.group({
      technology: [''],
      from: [''],
      to: ['']
    })

    this.path = this.router.url
    console.log(this.path);
  
    
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
    if(this.isLogin)
      this.router.navigate(['/dashboard/mentors',this.technology.value,this.from.value,this.to.value]);
    else 
    this.router.navigate(['/mentors',this.technology.value,this.from.value,this.to.value]);
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.getUser();
  }

}
