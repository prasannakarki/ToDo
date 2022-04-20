import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some welcome message.';
  name = '';

  //Activated Route to accept parameters in url.
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    console.log(this.message);
    //prints a name param in console which it grabs from Activated Router.
    console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe();
    //console.log('Get Welcome Message.');
  }
}

export class class1 {}
