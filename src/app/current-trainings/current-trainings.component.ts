import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-current-trainings',
  templateUrl: './current-trainings.component.html',
  styleUrls: ['./current-trainings.component.css']
})
export class CurrentTrainingsComponent implements OnInit {

  role: string;
  currentUser: any;
  Trainings: any;
  constructor(private service: TrainingService) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.role = this.currentUser.role;
    if(this.role == 'User'){
      this.getCurrentUserTrainings();
    }
    else this.getCurrentMentorTrainings();

  }

  getCurrentUserTrainings(){
    this.service.getCurrentTrainingsByuserId(this.currentUser.id).subscribe(data => {
      this.Trainings = data;
    },
    error => {
      console.log("failed");
    })
  }

  getCurrentMentorTrainings(){
    this.service.getCurrentTrainingsByMentorId(this.currentUser.id).subscribe(data => {
      this.Trainings = data;
    },
    error => {
      console.log("failed");
    })
  }

}
