import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TechnologyService } from '../service/technology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: any[]= [];
  constructor(private service: TechnologyService,
    private toastr: ToastrService) { }
    techForm: FormGroup;
  ngOnInit() {
    this.techForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl('', Validators.required),
      // url: new FormControl('')
    });
    this.getTechnologies();

  }


  
  get name() {
    return this.techForm.get('name');
  }

  // get url() {
  //   return this.techForm.get('url');
  // }

  add(){
    if(this.techForm.invalid){
      return;
    }
    this.service.addtechnology(this.techForm.value).subscribe(
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
    this.service.removeTechnology(tech.id).subscribe(res => {
     
        this.toastr.success("Deleted","Technology deleted successfully");
      
    })
    this.getTechnologies();
  }

}
