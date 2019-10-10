import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-current-trainings',
  templateUrl: './current-trainings.component.html',
  styleUrls: ['./current-trainings.component.css']
})
export class CurrentTrainingsComponent implements OnInit {

  role: string;
  currentUser: any;
  trainingForm: FormGroup;
  Trainings: any = [];
  statusList: any = [{name:'in progress',value: 0},{name:'25% completed',value: 25},{name: '50% completed',value: 50},{name: '75% completed',value: 75},{name: 'done',value: 100}]
  constructor(private service: TrainingService,private toastr: ToastrService) { }

  ngOnInit() {

    this.trainingForm = new FormGroup({
      status: new FormControl('',Validators.required),
      id: new FormControl(''),
      progress: new FormControl(''),
      userId: new FormControl(''),
      userName: new FormControl(''),
      mentorId: new FormControl(''),
      mentorName: new FormControl(''),
      commissionAmount: new FormControl(''),
      rating: new FormControl(''),
      avgRating: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      amountReceived: new FormControl(''),  
      skillId: new FormControl(''),
      skillName: new FormControl(''),
      fees: new FormControl(''),
      razorpayPaymentId: new FormControl(''),
    })
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.role = this.currentUser.role;
    if(this.role == 'User'){
      this.getCurrentUserTrainings();
    }
    else this.getCurrentMentorTrainings();

  }
  
  get progress() {
    return this.trainingForm.get('progress');
  }

  get rating() {
    return this.trainingForm.get('rating');
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

  get(train){
    this.service.getById(train.id).subscribe(res => {
      if(res){
        this.trainingForm.patchValue(res);
      }
    })
  }

  edit(){
    this.service.update(this.trainingForm.value).subscribe(res=>{
      if(res){
        this.toastr.success("Success","Training status updated successfully");
        this.getCurrentUserTrainings();
      }
    })
 
  }

}
