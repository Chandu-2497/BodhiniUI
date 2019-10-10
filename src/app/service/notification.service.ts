import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

   getAll(){
       return this.http.get(`${environment.url}training/notification`);
   }

   getById(id: any){
       return this.http.get(`${environment.url}training/notification/${id}`);
   }

   getByMentorId(mentorId: any){
       return this.http.get(`${environment.url}training/notification/mentorId/${mentorId}`);
   }

    getByUserId(userId: any){
    return this.http.get(`${environment.url}training/notification/userId/${userId}`);
    }

    add(noti: any){
        return this.http.post(`${environment.url}training/notification`,noti);
    }

    update(noti: any){
        return this.http.put(`${environment.url}training/notification`,noti);
    }



}
