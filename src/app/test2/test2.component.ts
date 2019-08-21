import { Component, OnInit, Input } from '@angular/core';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

 users: any;
  
  constructor(private studentservice: StudentsService) {
    this.studentservice.getAllStudents().subscribe(res => {
      this.users = res;
    });  
   }

  ngOnInit() {
    
  }

}
