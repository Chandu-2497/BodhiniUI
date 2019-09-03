import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

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
  technologyList: any[] = [{id:1,name:'Spring Boot'},{id:2,name:'Angular'},{id:3,name:'Core Java'},{id:4,name:'Advanced Java'}];
  timings: any[] ;
  facilitiesList: any[] = [{id:1,name:'Materials'},{id:2,name:'Examples/Cloud Labs'},{id:3,name:'Email/Modnum Verification'},{id:4,name:'LinkedIn URL'}];
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getMentorForm();
  }

  getMentorForm(){
    
    this.mentorForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      technologies: ['',Validators.required],
      // timings: ['',Validators.required],
      facilities: ['',Validators.required],
      phone: ['',Validators.required],
      city: ['',Validators.required],
      address:['',Validators.required],
      yearsOfExperience: ['',Validators.required],
      role : ['Mentor'],
      from: [''],
      to: ['']
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
