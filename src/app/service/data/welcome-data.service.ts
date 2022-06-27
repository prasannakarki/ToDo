import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean'
    );
    //console.log('Execute hello world service');
  }
  //passes along base64 to http request.
  executeHelloWorldServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      { headers }
    );
  }
  //creates a base64 representation of username and password.
  createBasicAuthenticationHttpHeader() {
    let username = 'prasanna';
    let password = 'karki';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

  //Ensure CORS response header values are valid
}
