import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../todo.service/todo.service';
import { Todo } from '../todo/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html',
  styleUrls: [ 'todo-detail.component.css' ]
})

export class TodoDetailComponent implements OnInit{
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.todoService.getTodo(this.id).subscribe((todo: Todo) => {
      this.title = todo.title;
      this.description = todo.description;
      this.completed = todo.completed;
    });
  }
}