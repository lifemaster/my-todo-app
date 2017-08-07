import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todo } from '../todo/todo';
import { HttpService } from '../http.service/http.service';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  constructor(private httpService: HttpService) {}

  createTodo(title: string, description: string = '') {
    let nextId = this.todos[this.todos.length - 1].id + 1;
    let todo = new Todo(nextId, title, description);
    this.todos.push(todo);
  }

  getTodos(): Observable<Todo[]> {
    return this.httpService.getTodoList().map((data: Response) => {
      this.todos = data.json();
      return this.todos;
    });
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}