import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material/dialog';
import { SearchService } from '../service/search.service';
import { TrainingService } from '../service/training.service';

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
  constructor(private searchservice: SearchService,
    private service :UserService,
    private router: ActivatedRoute,
    public dialog: MatDialog) { }

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
}
