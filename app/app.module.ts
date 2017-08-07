import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service/http.service';
import { TodoService } from './todo.service/todo.service';

import { AppComponent } from './app.component/app.component';
import { TodoFormComponent } from './todo-form.component/todo-form.component';
import { TodoListComponent } from './todo-list.component/todo-list.component';
import { TodoItemComponent } from './todo-item.component/todo-item.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HttpService, TodoService ]
})

export class AppModule { }