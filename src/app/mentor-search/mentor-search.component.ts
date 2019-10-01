import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { ViewProfileComponent } from '../view-profile/view-profile.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {

  profileData: any;
  mentorCalendar: any = [];
  searchResults: any;
  mentorskills: any[];
  technology: any;
  techname: string = "";
  mentors: any[] =[];
  isLogin: boolean=false;
  from: any;
  to: any;
  constructor(private service: UserService,
    private router: ActivatedRoute,
    private apiService: ApiService,
    public dialog: MatDialog) { }

  ngOnInit() {
    
    if(localStorage.getItem('currentUser')){
this.isLogin = true;
    }
    // else this.search();
    this.router.paramMap.subscribe(params => {
      this.technology = params.get('technology');
      // if(this.technology == 0){
      //   this.techname = 'All Trainings';
      //   this.getAll();
      // }
      // else{
       if(this.technology.value !== null)
        this.search();
      // }
    
    // console.log(this.techname)
    })
    
  }

  openDialog(mentor) {
   this.service.getById(mentor.id).subscribe(res => {
     console.log(res);
     this.profileData = res;
   })
  }

  getAll(){
    this.service.getAll().subscribe(res => {
      this.searchResults = res.filter(user => user.role == 'Mentor')
    })
    
  }

  search(){
    this.router.paramMap.subscribe(params => {
          this.technology = params.get('technology');
          this.from = params.get('from');
          this.to = params.get('to');
          console.log(this.technology);
    this.service.search(this.technology,this.from,this.to).subscribe(res => {
     
     if(res) this.searchResults = (res);
    })
  });
    // this.service.getAllMentors().subscribe(res => {
    //   this.mentorskills = res;
    //   // console.log(this.mentorskills)
    //   this.router.paramMap.subscribe(params => {
    //     this.technology = params.get('technology');
    //     this.from = params.get('from');
    //     this.to = params.get('to');
    // this.techname = this.apiService.getAllTechnologies().find(ite => ite.id == this.technology  ).name;
        
    //     this.service.getAll().subscribe(res => {
          
    //       this.mentors = res;
    //       this.service.getMentorCalendar().subscribe(r => {
    //         this.mentorCalendar = r;
    //         this.searchResults = [];
    //       // console.log(this.mentors)
    //   this.mentorskills.forEach(element => {
        
    //     if(element.name.search(this.techname) !== -1 && this.mentorCalendar.find(e => e.mentorId==element.mentorId && e.from == this.from && e.to == this.to)){
    //       this.searchResults.push(this.mentors.find(ment => ment.id == element.mentorId));
    //     }
    //   });
    // })
    //   })
    // })
    // })
  }
}
