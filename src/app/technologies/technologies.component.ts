import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TechnologyService } from '../service/technology.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  technologies: any = [];
  isEdit: boolean = false;
  constructor(private service: TechnologyService,private apiService: ApiService,
    private toastr: ToastrService) { }
    techForm: FormGroup ;
  ngOnInit() {
    this.techForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl('', Validators.required),
      fee: new FormControl('',Validators.required)
      // url: new FormControl('')
    });
    this.getTechnologies();

  }


  
  get name() {
    return this.techForm.get('name');
  }

  get fee() {
    return this.techForm.get('fee');
  }

  add(){
    if(this.techForm.invalid){
      return;
    }
    this.service.addtechnology(this.techForm.value).subscribe(
      data => {
        if(data){
        this.toastr.success("Done","Technology added successfully");
      
        this.getTechnologies();
        this.apiService.setAllTechnologies();
        this.techForm.reset();
        }
      },
      error => {
        this.toastr.error("Failed",error);
      }
      
    )

  }

  getTechnologies(){
    this.service.getAllTechnologies().subscribe(res => {
      if(res){
        this.technologies = res; 
      }
    });
  }

  remove(tech : any){
    this.service.removeTechnology(tech.id).subscribe(res => {
     if(res){
        this.toastr.success("Deleted","Technology deleted successfully");
        this.getTechnologies();
        this.apiService.setAllTechnologies();
        this.techForm.reset();
     }
    })
    
  }

  edit(tech: any){

    this.isEdit = false;
    this.service.updateTechnology(this.techForm.value).subscribe(res => {
      if(res){
        this.toastr.success("Updated","Technology updated successfully");
        this.getTechnologies();
      }
    })

  }

  get(tech: any){
    this.isEdit = true;
    this.service.getById(tech.id).subscribe(res => {
      if(res){
        this.techForm.patchValue(res);
      }
    })
  }

}
