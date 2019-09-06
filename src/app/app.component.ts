import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myproject';
  admin : any  = {firstName: "Prakash", lastName: "Rahul", username: "prakash@gmail.com", password: "Prakash",id: 4,
  isActive: true,role: "Admin"}
  ngOnInit(): void {
   

      let users = JSON.parse(localStorage.getItem('users')) || [];
      this.admin.id = users.length + 1;
      if(!users.find(ele  => ele.role == 'Admin'))
      users.push(this.admin);
      console.log(users);
      localStorage.setItem('users',JSON.stringify(users));
  
  
    
  }
 
    
  
constructor(){

  
}
}
