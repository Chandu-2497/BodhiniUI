import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../service/user.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // role : any;
  
  title: string = 'Registration Form';
  submitted: boolean = false;
  userForm: FormGroup;
 
  // role: AbstractControl;
  loading: boolean = false;
  
  

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  
    this.userForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      phone: ['',Validators.required],
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      role : ['User']
    })
   
    
  }

  get f() {
   return this.userForm.controls}

 

  
  submit(){

    this.submitted = true;
    

    this.loading = true;
   
     
      if(this.userForm.invalid){
        return;
      }
      this.userService.register(this.userForm.value)
    .pipe(first())
    .subscribe(
      data => {
        // this.alertService.success('Registration Successfull',true);
        this.toastr.success("Success","Registration Successfull");
        this.router.navigate(['/login']);
        this.loading = false;
      },
      error => {
        this.toastr.error("Failure","Registration Failed");
      }
    )
    
    }
  

}
