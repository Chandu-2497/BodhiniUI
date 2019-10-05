import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(tech: any,from: any,to: any){
    let url = environment.url+(`search/${tech}/${from}/${to}`)
    console.log(url);
    return this.http.get(url);
}

  addSkill(skill: any){
    return this.http.post(`${environment.url}search/skills`,skill);
  }

  getSkillById(mentorid : number){
    return this.http.get(`${environment.url}search/skills/${mentorid}`);
  }

  updateSkill(skill: any){
    return this.http.put(`${environment.url}search/skills`,skill)
  }

  getCalendarById(mentorid : number){
    return this.http.get(`${environment.url}search/calendar/${mentorid}`);
  }

  addCalendar(cal: any){
    return this.http.post(`${environment.url}search/calendar`,cal);
  }

  updateCalendar(cal: any){
    return this.http.put(`${environment.url}search/calendar`,cal);
  }

  

}


