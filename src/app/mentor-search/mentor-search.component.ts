import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material/dialog';
import { SearchService } from '../service/search.service';
import { TrainingService } from '../service/training.service';
import { NotificationService } from '../service/notification.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {

  profileData: any;
  mentorCalendar: any = [];
  searchResults: any = [];
  mentorskills: any[];
  technology: any;
  techname: string = "";
  mentors: any[] =[];
  isLogin: boolean=false;
  from: any;
  to: any;
  currentUser: any;
  notification: FormGroup;
  constructor(private searchservice: SearchService,
    private notiSerive: NotificationService,
    private service :UserService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog,private form:FormBuilder) { }

  ngOnInit() {
    
    if(localStorage.getItem('currentUser')){
this.isLogin = true;
    }
   
    this.router.paramMap.subscribe(params => {
      this.technology = params.get('technology');
       if(this.technology.value !== null)
        this.search();  
    })
    
  }

  openDialog(mentor) {
   this.service.getById(mentor.id).subscribe(res => {
     console.log(res);
     this.profileData = res;
   })
  }

  getAll(){
  }

  search(){
    this.router.paramMap.subscribe(params => {
          this.technology = params.get('technology');
          this.from = params.get('from');
          this.to = params.get('to');
          console.log(this.technology);
    this.searchservice.search(this.technology,this.from,this.to).subscribe(res => {
     if(res) this.searchResults = (res);
    })
  });
  }

  request(mentor: any){

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.notification = this.form.group({
      // id:[''],
      userId: [''],
      userName: [''],
      mentorId: [''],
      mentorName: [''],
      skillId: [''],
      skillName: [''],
      // requestDate: [''],
      // isAccepted: [''],
      fees: ['']
    })
this.notification.get('userId').setValue(this.currentUser.id);
this.notification.get('mentorId').setValue(mentor.mentorId);
this.notification.get('skillId').setValue(mentor.skillId);
this.notification.get('mentorName').setValue(mentor.mentorName);
this.notification.get('userName').setValue(this.currentUser.firstName);
this.notification.get('skillName').setValue(mentor.skillName);
this.notification.get('fees').setValue(mentor.fees);
console.log(this.notification.value)
    this.notiSerive.add(this.notification.value).subscribe(res => {
      if(res){
        this.toastr.success("Success","Requested Successfully");
      }
    });
  }


}
