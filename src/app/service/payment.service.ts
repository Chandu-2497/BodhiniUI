import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

 
    addPayment(payment: any){
        return this.http.post(`${environment.url}payment`,payment);
    }

    getById(id: number){
        return this.http.get(`${environment.url}payment/${id}`);
    }

    update(payment: any){
        return this.http.put(`${environment.url}payment`,payment);
    }

    getByUserId(trainingid: number){
        return this.http.get(`${environment.url}payment/trainingId/${trainingid}`)
    }

    getByMentorId(mentorid: number){
        return this.http.get(`${environment.url}payment/mentorId/${mentorid}`)
    }





}


