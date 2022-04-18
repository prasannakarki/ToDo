import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'prasanna';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === 'prasanna' && this.password === 'karki') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    //console.log(this.username);
  }
}
