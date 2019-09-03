import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Mentor } from '../models/mentor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/users`);
}

getAllMentors(){
    return this.http.get<Mentor[]>(`/mentorSkills`);
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

update(user: User) {
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

}
