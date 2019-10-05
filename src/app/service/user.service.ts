import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Mentor } from '../models/mentor';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${environment.url}users`);
}

getAllMentors(){
    return this.http.get<any[]>(`${environment.url}mentorSkills`);
}

getById(id: number) {
    return this.http.get(`${environment.url}users/` + id);
}

register(user: any) {
    return this.http.post(`${environment.url}register`, user);
}

registerMentor(mentor: Mentor){
    return this.http.post(`${environment.url}mentors/register`,mentor);
}

update(user: any) {
    return this.http.put(`${environment.url}users/${user.id}`, user);
}

delete(id: number) {
    return this.http.delete(`${environment.url}users/${id}`);
}

unblock(id: number) {
    return this.http.post(`${environment.url}unblock-user/${id}`,[]);
}

removeTechnology(id: number) {
    return this.http.delete(`${environment.url}remove-tech/${id}`);
}

addtechnology(tech: any){
    return this.http.post(`${environment.url}technologies/add`,tech);
}

getMentorCalendar(){
    return this.http.get(`${environment.url}mentorCalendar`);

}

}
