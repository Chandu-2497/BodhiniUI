import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mentor-register',
  templateUrl: './mentor-register.component.html',
  styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {
  from: Time;
  to: Time;
  title: string = 'Registration Form';
  submitted: boolean = false;
  loading: boolean = false;
  mentorForm: FormGroup;
  technologyList: any[] ;
  timings: any[] ;
  facilitiesList: any[] = [{id:1,name:'Materials'},{id:2,name:'Examples/Cloud Labs'},{id:3,name:'Email/Modnum Verification'}];
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private apiservice: ApiService,
    private alertService: AlertService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getMentorForm();
    this.technologyList = this.apiservice.getAllTechnologies();
  }

  getMentorForm(){
    
    this.mentorForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      technologies: ['',Validators.required],
      linkedInUrl: ['',Validators.required],
      facilities: ['',Validators.required],
      phone: ['',Validators.required],
      yearsOfExperience: ['',Validators.required],
      role : ['Mentor'],
      toc: ['',Validators.required],
      from: ['',Validators.required],
      to: ['',Validators.required]
    })
    
   
  }

  get f() {
    return this.mentorForm.controls}
 
  
 
   
   submit(){
 
     this.submitted = true;
     
 
     this.loading = true;
     
       if(this.mentorForm.invalid){
         return;
       }
       this.userService.register(this.mentorForm.value)
       .pipe(first())
     .subscribe(
       data => {
        //  this.alertService.success('Registration Successfull',true);
        this.toastr.success("Success","Registration Successfull")
         this.router.navigate(['/login']);
         this.loading = false;
       },
       error => {
        this.toastr.error("Failure","Registration Failed")
       }
     )
     
     
   }


}
