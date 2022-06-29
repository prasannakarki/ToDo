import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username: string, password: string) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'prasanna' && password === 'karki') {
      //stores in browser session. username.
      sessionStorage.setItem('authenticateUser', username);
      // console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logoutUser() {
    sessionStorage.removeItem('authenticateUser');
  }

  executeAuthenticatonService(username, password) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      { headers }
    );
  }
  //creates a base64 representation of username and password.
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
