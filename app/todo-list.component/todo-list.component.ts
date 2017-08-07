import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { TodoService } from '../todo.service/todo.service';
import { Todo } from '../todo/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: [ 'todo-list.component.css' ]
})

export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}