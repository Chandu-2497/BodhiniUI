import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: any[]= [];
  constructor(private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.getTechnologies();

  }

  getTechnologies(){
    this.technologies = JSON.parse(localStorage.getItem('technologies'));;
  }

  remove(tech : any){
    this.userService.removeTechnology(tech.id).subscribe(res => {
     
        this.toastr.success("Deleted","Technology deleted successfully");
      
    })
    this.getTechnologies();
  }


  add(tech: any){
    this.userService.addtechnology(tech).subscribe(res => {
      if(res){
        this.getTechnologies();
      }
    })
  }

}
