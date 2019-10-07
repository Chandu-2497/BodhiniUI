import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  role: string;
  currentUser;
  Trainings: any = [];
  constructor(private service: TrainingService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.role = this.currentUser.role;
    if(this.role == 'Mentor'){
      this.getAllByMentorId();
    }
    else this.getAllByUserId();
  }

  getAllByMentorId(){
    this.service.getCompletedTrainingsByMentorId(this.currentUser.id).subscribe(res => {
      if(res){
        this.Trainings = res;
      }
    })
  }

  getAllByUserId(){
    this.service.getCompletedTrainingsByUserId(this.currentUser.id).subscribe(res => {
      if(res){
        this.Trainings = res;
      }
    })
  }

}
