import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Time } from '@angular/common';
import { UserService } from '../service/user.service';
import { AlertService } from '../service/alert.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { SearchService } from '../service/search.service';

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
  skillForm: any = {};
  calForm: any = {};
  technologyList: any =[] ;
  timings: any[] ;
  facilitiesList: any[] = [{id:1,name:'Materials'},{id:2,name:'Examples/Cloud Labs'},{id:3,name:'Email/Modnum Verification'}];
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private apiservice: ApiService,
    private router: Router,
    private searchService: SearchService,
    private toastr: ToastrService) { 
      this.technologyList = this.apiservice.getAllTechnologies();
      console.log(this.technologyList);
    }

  ngOnInit() {
    this.getMentorForm();
    
  }

  getMentorForm(){
    
    this.mentorForm = this.formBuilder.group({
      firstName : ['',Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      technologies: ['',Validators.required],
      linkedInUrl: ['',Validators.required],
      facilities: ['',Validators.required],
      contactNumber: ['',Validators.required],
      yearsOfExperience: ['',Validators.required],
      role : ['Mentor'],
      toc: ['',Validators.required],
      start_time: ['',Validators.required],
      end_time: ['',Validators.required]
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
       this.skillForm['name'] = this.f.technologies.value.toString();
       this.skillForm['toc'] = this.f.toc.value;
       this.skillForm['prerequisites'] = this.f.facilities.value.toString();

       this.calForm['start_time'] = this.f.start_time.value;
       this.calForm['end_time'] = this.f.end_time.value;

       this.userService.register(this.mentorForm.value)
       .pipe(first())
     .subscribe(
       data => {
         let result = data;
        //  this.alertService.success('Registration Successfull',true);
        this.toastr.success("Success","Registration Successfull")
        this.skillForm['mentorid'] = JSON.parse(result.id);
        this.calForm['mentorid'] = JSON.parse(result.id);
        this.searchService.addSkill(this.skillForm).subscribe(res =>{
          this.toastr.success("Success","Skill Added Successfull");
        });
        this.searchService.addCalendar(this.calForm).subscribe(res=>{
          this.toastr.success("Success","Calendar Added Successfull");
        });
         this.router.navigate(['/login']);
         this.loading = false;
       },
       error => {
        this.toastr.error("Failure","Registration Failed")
       }
     )
     
     
   }


}
