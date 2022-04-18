import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos = [
    { id: 1, description: 'Learn to Code' },
    { id: 2, description: 'Learn Springboot' },
    { id: 3, description: 'Learn Angular' },
  ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Code',
  // };
  constructor() {}

  ngOnInit(): void {}
}
