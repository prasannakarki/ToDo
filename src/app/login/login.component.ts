import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === 'prasanna' && this.password === 'karki') {
      //redirect to welcome page if password matches
      this.invalidLogin = false;
      //navigate to diffrent page this.username passes in paramater
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    //console.log(this.username);
  }
}
