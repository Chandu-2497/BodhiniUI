import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { AlertService } from '../service/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private service: UserService,
    private toarstr: ToastrService,
    private alert: AlertService) { }

  ngOnInit() {
    this.getUsers();
    
  }

  getUsers(){
    this.service.getAll().subscribe(res => {
      this.users = res;
    })
  }

  block(user: any){
    this.service.delete(user.id).subscribe(res => {
      // this.alert.success("User Blocked Successfully");

      this.toarstr.success("Success","User Blocked Successfully");
    })
    this.getUsers();
  }

  unblock(user: any){
    this.service.unblock(user.id).subscribe(res => {
      this.toarstr.success("Success","User Activated Successfully");
    })
    this.getUsers();
  }

  
}
