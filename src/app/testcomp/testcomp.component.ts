import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  // template: '<h2>Hello</h2>',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  name: string = 'Info';
  id: number;
  // salary: number;
  date: Date;
  user: any;
  fee: any;
  url: string = 'assets/images/nature.jpeg';
  users: any[] = [
    {id:1,name:'Chandrika',date:'01/08/2019',fee:20000},
    {id:2,name:'Aishwarya',date:'04/05/2018',fee:30000},
    {id:3,name:'Akanksha',date:'05/06/2017',fee:40000}
  ]
  isAdd: boolean = false;
  constructor() { }

  ngOnInit() {
    localStorage.setItem('Users',JSON.stringify(this.users));
    this.users = JSON.parse(localStorage.getItem('Users'));
  }
submit(){
  this.user = {
    id: this.id,
    name: this.name,
    date: this.date,
    fee: this.fee
  }
  console.log(this.user);
 this.users = this.users.concat(this.user);
  console.log(this.users)
    localStorage.setItem('Users',JSON.stringify(this.users));
    this.users = JSON.parse(localStorage.getItem('Users'));
  
}

add(){
  this.isAdd = true;
}

reset(){
  this.name = null;
  this.id = null;
  this.date = null;
  this.fee = null;
}
}
