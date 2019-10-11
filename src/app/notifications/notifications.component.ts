import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notification.service';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from '../service/training.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  role: any;
  trainingForm : FormGroup;
  currentUser:any;
  trainings: any;
  constructor(private notiService: NotificationService,private toastr: ToastrService,private trainService: TrainingService,
    private payService: PaymentService
    ) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.role = this.currentUser.role;
    if(this.role == 'Mentor'){
      this.getAll();

  }
  else if(this.role == 'User'){
    this.getByUser();
    
  }
}

  getAll(){
    

    this.notiService.getByMentorId(this.currentUser.id).subscribe(res=>
      {
        if(res)
          this.trainings = res;
        

    });
  }
 
  getByUser(){
    this.notiService.getByUserId(this.currentUser.id).subscribe(res=>{
      if(res){
        this.trainings = res;
      }
    })
  }

  accept(train){
    train.accepted = true;
    this.notiService.update(train).subscribe(res => {
      if(res){
this.toastr.success("Success","Accepted SUccessfully");
this.addTrain(train);
if(this.role == 'Mentor'){
  this.getAll();
}
else if(this.role == 'User'){
this.getByUser();

}
      }
    })
  }

  reject(train: any){
    train.accepted = false;
    this.notiService.update(train).subscribe(res => {
      if(res){
this.toastr.success("Success","Rejectetd SUccessfully");

if(this.role == 'Mentor'){
  this.getAll();
}
else if(this.role == 'User'){
this.getByUser();

}
      }
    })

  }

  addTrain(train){

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
    
    this.trainingForm.patchValue(train);
    this.trainingForm.get('status').setValue('not completed');
    
    this.trainService.addtraining(this.trainingForm.value).subscribe(res =>{
      if(res){
        this.toastr.success("Success","Training Added");
      }
    })

  }

  pament(train: any){





  }

}