import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-tech',
  templateUrl: './create-tech.component.html',
  styleUrls: ['./create-tech.component.css']
})
export class CreateTechComponent implements OnInit {

  constructor(private service: UserService,
    private toastr: ToastrService) { }

  techForm: FormGroup;

  ngOnInit() {
    this.techForm = new FormGroup({
      id: new FormControl(""),
      name: new FormControl('', Validators.required),
      url: new FormControl('')
    });
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
    this.service.addtechnology(this.techForm.value).subscribe(
      data => {
        this.toastr.success("Done","Technology added successfully");
      
      },
      error => {
        this.toastr.error("Failed",error);
      }
      
    )

  }

}
