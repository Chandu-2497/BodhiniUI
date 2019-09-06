import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mentor-search',
  templateUrl: './mentor-search.component.html',
  styleUrls: ['./mentor-search.component.css']
})
export class MentorSearchComponent implements OnInit {

  searchResults: any[] = [];
  mentorskills: any[];
  technology: any;
  techname: string = "";
  mentors: any[] =[];
  isLogin: boolean=false;
  constructor(private service: UserService,
    private router: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.search();
    if(localStorage.getItem('currentUser')){
this.isLogin = true;
    }
    this.router.paramMap.subscribe(params => {
      this.technology = params.get('technology');
    this.techname = this.apiService.getAllTechnologies().find(ite => ite.id == this.technology  ).name;
    console.log(this.techname)
    })
    
  }

  search(){

    this.service.getAllMentors().subscribe(res => {
      this.mentorskills = res;
      // console.log(this.mentorskills)
      this.router.paramMap.subscribe(params => {
        this.technology = params.get('technology');
        this.searchResults = [];
        this.service.getAll().subscribe(res => {
          
          this.mentors = res;
          // console.log(this.mentors)
      this.mentorskills.forEach(element => {
        if(element.name.search(this.technology)){
          this.searchResults.push(this.mentors.find(ment => ment.id == element.mentorId));
        }
      });
      })
    })
    })
  }
}
