import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private http: HttpClient) { }

    removeTechnology(id: number) {
        return this.http.delete(`${environment.url}remove-tech/${id}`);
    }

    addtechnology(tech: any){
        return this.http.post(`${environment.url}technologies/add`,tech);
    }

    updateTechnology(tech : any){
        return this.http.put(`${environment.url}technology`,tech);
    }

    getAllTechnologies(){
        return this.http.get(`${environment.url}technology`);
    }

    getById(id: number){
        return this.http.get(`${environment.url}technology/${id}`);
    }


}
