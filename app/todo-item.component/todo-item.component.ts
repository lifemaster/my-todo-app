import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: [ 'todo-item.component.css' ]
})

export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onDelete() {
    this.delete.emit(this.todo);
  }

  onToggle() {
    this.toggle.emit(this.todo);
  }
}