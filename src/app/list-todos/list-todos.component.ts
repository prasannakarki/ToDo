import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;
  // todos = [
  //   new Todo(1, 'Learn to code', false, new Date()),
  //   new Todo(2, 'Learn SpringBoot', false, new Date()),
  //   new Todo(3, 'Learn Angular', false, new Date()),
  // ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Code',
  // };
  constructor(private todoService: TodoDataService) {}

  ngOnInit(): void {
    this.refreshToDos;
  }
  refreshToDos() {
    this.todoService.retrieveAllTodos('Prasanna').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteToDo('Prasanna', id).subscribe((response) => {
      console.log(response);
      this.refreshToDos;
      this.message = `Delete of ToDo ID#${id} Successful`;
    });
  }
}
