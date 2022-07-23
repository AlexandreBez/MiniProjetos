import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  alertHelper: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickSubmit(){

    if(this.username === 'teste@teste.com' && this.password === '12345'){
      this.alertHelper = true;
    }

    this.username = "";
    this.password = "";
  }

}