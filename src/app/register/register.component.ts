import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // role : any;
  from: Time;
  to: Time;
  title: string = 'Registration Form';
  submitted: boolean = false;
  userForm: FormGroup;
  mentorForm: FormGroup;
  // role: AbstractControl;
  loading: boolean = false;
  isMentor: boolean = false;
  technologyList: any[] = [{id:1,name:'Spring Boot'},{id:2,name:'Angular'},{id:3,name:'Core Java'},{id:4,name:'Advanced Java'}];
  timings: any[] ;
  facilitiesList: any[] = [{id:1,name:'Materials'},{id:2,name:'Examples/Cloud Labs'},{id:3,name:'Email/Modnum Verification'},{id:4,name:'LinkedIn URL'}];

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
  //  this.getUserForm();
    this.userForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      role : ['']
    })
    // this.role = this.formBuilder.control['role'];
    this.userForm.get('role').patchValue('2');
    this.userForm.get('role').valueChanges.subscribe(
      
        value =>{
          if(value == 3)
          {
            this.getMentorForm();
            this.isMentor = true;
          }else{
            // this.getUserForm();
            
            // this.isMentor = false;
          }
          
        }
      )
      
    
  }

  get f() { if(this.isMentor) return this.mentorForm.controls;
  else return this.userForm.controls}

  getUserForm(){
    // this.title = 'User Registration Form'
    this.userForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role : ['']
    })

    this.userForm.get('role').patchValue('2');

    this.userForm.get('role').valueChanges.subscribe(
      
      value =>{
        if(value == 3)
        {
          // this.getMentorForm();
          this.isMentor = true;
        }else{
          // this.getUserForm();
          // this.userForm.get('role').setValue('2');
          this.isMentor = false;
        }
        
      }
    )
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
      role : [''],
      from: [''],
      to: ['']
    })
    
    this.mentorForm.get('role').patchValue('3');
    this.mentorForm.get('role').valueChanges.subscribe(
      
      value =>{
        if(value == 3)
        {
          // this.getMentorForm();
          // this.mentorForm.get('role').setValue('3');
          this.isMentor = true;
        }else{
          
          // this.getUserForm();
          this.userForm.get('role').patchValue('2');
          this.isMentor = false;
        }
        
      }
    )
  }

  submit(){

    this.submitted = true;
    

    this.loading = true;
    if(this.isMentor){
      if(this.mentorForm.invalid){
        return;
      }
      this.userService.registerMentor(this.mentorForm.value)
      .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration Successfull',true);
        this.router.navigate(['/login']);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
      }
    )
    }
    else {
      if(this.userForm.invalid){
        return;
      }
      this.userService.register(this.userForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration Successfull',true);
        this.router.navigate(['/login']);
        this.loading = false;
      },
      error => {
        this.alertService.error(error);
      }
    )
    
    }
  }

}
