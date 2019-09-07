import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  technologies =  [
    {id:1,name:"Spring Boot",url: "../../assets/images/springboot.png",fee:5000},
    {id:2,name:"Angular",url:"../../assets/images/angular.png",fee:6000},
    {id:3,name:"Core Java",url:"../../assets/images/java.png",fee:4000},
    {id:4,name:"Advanced Java",url:"../../assets/images/adjava.png",fee:5000},
    {id:5,name:"C#",url:"../../assets/images/csharp.png",fee:3000},
    {id:6,name:".NET",url:"../../assets/images/net.jpg",fee:7000}
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
