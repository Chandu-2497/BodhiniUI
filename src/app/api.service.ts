import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  technologies =  [
    {id:1,name:"Spring Boot",url: "../../assets/images/springboot.png"},
    {id:2,name:"Angular",url:"../../assets/images/angular.png"},
    {id:3,name:"Core Java",url:"../../assets/images/java.png"},
    {id:4,name:"Advanced Java",url:"../../assets/images/adjava.png"},
    {id:5,name:"C#",url:"../../assets/images/csharp.png"},
    {id:6,name:".NET",url:"../../assets/images/net.jpg"}
   ]
  constructor() { }

  getAllTechnologies(){
    if(localStorage.getItem('technologies')){
      return JSON.parse(localStorage.getItem('technologies'));
    }
    else{
      localStorage.setItem('technologies',JSON.stringify(this.technologies));
      return JSON.parse(localStorage.getItem('technologies'));
    }
      
  }
}
