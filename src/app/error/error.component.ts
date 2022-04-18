import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An Error happened. Contact support at ***Prasanna***.';
  constructor() {}

  ngOnInit(): void {}
}
