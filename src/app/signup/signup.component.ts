import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Fname: string; Lname: string;
  Email: string;
  Mobno: number;
  Pswrd: string;

  constructor() { }

  ngOnInit() {
  }

  onClickButton(){
    alert("Your account has been created successfully.");
  }
}
