import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

   getCompletedTrainingsByUserId(userid :number){
    return this.http.get(`${environment.url}training/userCompleted/${userid}`)
   }

   getCompletedTrainingsByMentorId(mentorid :number){
    return this.http.get(`${environment.url}training/mentorCompleted/${mentorid}`)
   }

   getCurrentTrainingsByuserId(userid: number){
       return this.http.get(`${environment.url}training/userCurrent/${userid}`)
   }

   getCurrentTrainingsByMentorId(mentorid :number){
    return this.http.get(`${environment.url}training/mentorCurrent/${mentorid}`)
   }

   addtraining(training : any){
       return this.http.post<any>(`${environment.url}training`,training);
   }

   update(training: any){
       return this.http.put<any>(`${environment.url}training`,training)
   }

   getAll(){
     return this.http.get(`${environment.url}training`);
   }



}
