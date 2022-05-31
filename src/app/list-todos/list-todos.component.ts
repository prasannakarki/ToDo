import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private todoService: TodoDataService, private router: Router) {}

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
  updateTodo(id) {
    console.log(`Update ${id} successful`);
    this.router.navigate(['todos', id]);
  }
}
