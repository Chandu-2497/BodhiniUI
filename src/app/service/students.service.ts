import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( private http: HttpClient) { }

  getAllStudents(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
