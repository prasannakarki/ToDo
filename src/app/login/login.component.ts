import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    //if (this.username === 'prasanna' && this.password === 'karki') {
    //redirect to welcome page if password matches
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.invalidLogin = false;
      //navigate to diffrent page this.username passes in paramater
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    //console.log(this.username);
  }
}
