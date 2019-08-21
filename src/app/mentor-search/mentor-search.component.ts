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
  mentors: any[];
  technology: any;
  techname: string = "";

  constructor(private service: UserService,
    private router: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.search();
    this.router.paramMap.subscribe(params => {
      this.technology = params.get('technology');
    this.techname = this.apiService.getAllTechnologies().find(ite => ite.id == this.technology  ).name;
    })
  }

  search(){

    this.service.getAllMentors().subscribe(res => {
      this.mentors = res;
      this.router.paramMap.subscribe(params => {
        this.technology = params.get('technology');
        this.searchResults = [];
      this.mentors.forEach(element => {
        if(element.technologies.find(item => item == this.technology)){
          this.searchResults.push(element);
        }
      });
      })
    })
  }
}
