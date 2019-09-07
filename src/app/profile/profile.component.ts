import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  Skills : FormGroup;
  technologyList: any;
  facilitiesList: any[] = [{id:1,name:'Materials'},{id:2,name:'Examples/Cloud Labs'},{id:3,name:'Email/Modnum Verification'}];
  constructor(private userservice: UserService,
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.technologyList = this.apiService.getAllTechnologies();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.Skills = this.formBuilder.group({
      name:['',Validators.required],
      toc:['',Validators.required],
      prerequisites: ['',Validators.required]

    })
    this.getSkills();
  }

  get f(){ return this.Skills.controls;}
  getSkills(){
    this.userservice.getAllMentors().subscribe(res => {
      let skill : any ;
      
      skill = res.find(skill => skill.mentorId == this.currentUser.id);
      console.log(skill);
      let mentSkill: any = {};
      mentSkill.name = skill['name'].split(',');
      mentSkill.prerequisites = skill['prerequisites'].split(',');
      mentSkill.toc = skill['toc'];
      console.log(mentSkill);
      this.Skills.patchValue(mentSkill);
    })
  }

}
