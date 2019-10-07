import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { SearchService } from '../service/search.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private searchService: SearchService,
    private formBuilder: FormBuilder,private toastr: ToastrService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.technologyList = this.apiService.getAllTechnologies();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.Skills = this.formBuilder.group({
      id: [''],
      name:['',Validators.required],
      toc:['',Validators.required],
      prerequisites: ['',Validators.required],
      mentorid: ['']

    })
    this.getSkills();
  }

  get f(){ return this.Skills.controls;}
  getSkills(){
    this.searchService.getSkillById(this.currentUser.id).subscribe(res => {
      if(res){
        let skill : any =res ;
        // skill['id'] = .id;
        skill['name'] = skill.name.split(',');
        skill['prerequisites'] = skill.prerequisites.split(',');
        this.Skills.patchValue(skill);
      }
    })
  }

  submit(){
    let skill: any = {};
    skill['id'] = this.Skills.get('id').value;
    skill['toc'] = this.Skills.get('toc').value;
    skill['name'] = this.Skills.get('name').value.toString();
    skill['prerequisites'] = this.Skills.get('prerequisites').value.toString();
    skill['mentorid'] = this.Skills.get('mentorid').value;
    this.searchService.updateSkill(skill).subscribe(res => {
      if(res){
        this.toastr.success("Success","Skills updated successfully");
        this.getSkills();
      }
    })
  }
}
