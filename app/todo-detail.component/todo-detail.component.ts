import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html',
  styleUrls: [ 'todo-detail.component.css' ]
})

export class TodoDetailComponent {
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }
}