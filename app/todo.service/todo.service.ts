import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Todo } from '../todo/todo';
import { HttpService } from '../http.service/http.service';

@Injectable()
export class TodoService {
  todosBehavior: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  updates: Subject<any> = new Subject(); //Todo[] => ToDo[]

  constructor(private httpService: HttpService) {
    this.httpService
      .getTodoList()
      .map(data => data.json())
      .subscribe(data => this.todosBehavior.next(data)); // !!!

    this.updates.subscribe(updateHandler => {
      let todos = this.todosBehavior.getValue();
      todos = updateHandler(todos);
      this.todosBehavior.next(todos);
    });
  }

  createTodo(title: string, description: string = '') {
    const todos = this.todosBehavior.getValue();
    const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const todo = new Todo(nextId, title, description);

    this.updates.next((todos: Todo[]) => todos.concat(todo));
  }

  getTodo(id: number): Todo {
    let todos = this.todosBehavior.getValue();
    let index = todos.findIndex(todo => todo.id == id);
    return todos[index];
  }

  toggleTodo(todo: Todo) {
    this.updates.next((todos: Todo[]) => {
      let index = todos.indexOf(todo);
      todos[index].completed = !todos[index].completed;
      return todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.updates.next((todos: Todo[]) => {
      let index = todos.indexOf(todo);
      todos.splice(index, 1);
      return todos;
    });
  }
}