import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  //sets a default value for todo in case of loading issues
  //also retrieves  the todo when page loads.
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService
        .retrieveTodo('prasanna', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  //saves the update to the todo and reroutes back to the main list.
  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('prasanna', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    } else {
      this.todoService
        .putTodo('prasanna', this.id, this.todo)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
