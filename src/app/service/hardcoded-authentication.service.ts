import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'prasanna' && password === 'karki') {
      //redirect to welcome page if password matches
      return true;
    }
    return false;
  }
}
