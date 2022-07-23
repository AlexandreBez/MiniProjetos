import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  invalidValues = false;
  validValues = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickSubmit(){
    
    if(this.username !== "teste@teste.com" && this.password !== "12345"){

      this.invalidValues = true;

      this.username = "";
      this.password = "";
      this.validValues = false;

    }else { 

      this.validValues = true;
      this.invalidValues = false;

      this.username = "";
      this.password = "";
    }

  }

}