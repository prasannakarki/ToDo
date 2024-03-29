import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

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
}
