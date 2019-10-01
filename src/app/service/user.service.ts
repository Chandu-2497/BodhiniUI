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
    return this.http.get<any[]>(`/users`);
}

getAllMentors(){
    return this.http.get<any[]>(`/mentorSkills`);
}

getById(id: number) {
    return this.http.get(`/users/` + id);
}

register(user: any) {
    return this.http.post(`/users/register`, user);
}

registerMentor(mentor: Mentor){
    return this.http.post('/mentors/register',mentor);
}

update(user: any) {
    return this.http.put(`/users/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`/users/` + id);
}

unblock(id: number) {
    return this.http.post('/unblock-user/' + id,[]);
}

removeTechnology(id: number) {
    return this.http.delete('/remove-tech/'+ id);
}

addtechnology(tech: any){
    return this.http.post('/technologies/add',tech);
}

getMentorCalendar(){
    return this.http.get('/mentorCalendar');

}

search(tech: any,from: any,to: any){
    let url = environment.url+(`search/${tech}/${from}/${to}`)
    console.log(url);
    return this.http.get(url);
}

}
