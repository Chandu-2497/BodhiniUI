import { Injectable } from '@angular/core';
import { TechnologyService } from './service/technology.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  technologies : any = [
    // {id:1,name:"SpringBoot",url: "../../assets/images/springboot.png",fee:5000},
    // {id:2,name:"Angular",url:"../../assets/images/angular.png",fee:6000},
    // {id:3,name:"Core Java",url:"../../assets/images/java.png",fee:4000},
    // {id:4,name:"Advanced Java",url:"../../assets/images/adjava.png",fee:5000},
    // {id:5,name:"C#",url:"../../assets/images/csharp.png",fee:3000},
    // {id:6,name:".NET",url:"../../assets/images/net.jpg",fee:7000}
   ]
  constructor(private techservice: TechnologyService) { 
this.setAllTechnologies();
  //  this.getAllTechnologies();
     
    
  }

  setAllTechnologies(){
    this.techservice.getAllTechnologies().subscribe(res => {
      if(res){
        this.technologies = res;
    // if(localStorage.getItem('technologies')){
    //   return JSON.parse(localStorage.getItem('technologies'));
    // }
    // else{
      localStorage.setItem('technologies',JSON.stringify(this.technologies));
      // return JSON.parse(localStorage.getItem('technologies'));
    }
  
})
      
  }

  getAllTechnologies(){
    this.setAllTechnologies();
    if(localStorage.getItem('technologies')){
      return JSON.parse(localStorage.getItem('technologies'));
    }
    // else{
    //   localStorage.setItem('technologies',JSON.stringify(this.technologies));
    //   return JSON.parse(localStorage.getItem('technologies'));
    // }
  }
}
