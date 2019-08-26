import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: any[]= [];
  constructor(private userService: UserService,
    private toastr: ToastrService) { }
    techForm: FormGroup;
  ngOnInit() {
    this.techForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl('', Validators.required),
      url: new FormControl('')
    });
    this.getTechnologies();

  }


  
  get name() {
    return this.techForm.get('name');
  }

  get url() {
    return this.techForm.get('url');
  }

  add(){
    if(this.techForm.invalid){
      return;
    }
    this.userService.addtechnology(this.techForm.value).subscribe(
      data => {
        this.toastr.success("Done","Technology added successfully");
      
        this.getTechnologies();
      },
      error => {
        this.toastr.error("Failed",error);
      }
      
    )

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


  // add(tech: any){
  //   this.userService.addtechnology(tech).subscribe(res => {
  //     if(res){
  //       this.getTechnologies();
  //     }
  //   })
  // }

}
