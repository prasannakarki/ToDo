import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some welcome message.';
  name = '';

  //Activated Route to accept parameters in url.
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.message);
    //prints a name param in console which it grabs from Activated Router.
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}

export class class1 {}
