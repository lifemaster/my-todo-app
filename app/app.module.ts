// Native Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Services
import { HttpService } from './http.service/http.service';
import { TodoService } from './todo.service/todo.service';

// Custom Components
import { AppComponent } from './app.component/app.component';
import { HomeComponent } from './home.component/home.component';
import { TodoComponent } from './todo.component/todo.component';
import { TodoFormComponent } from './todo-form.component/todo-form.component';
import { TodoListComponent } from './todo-list.component/todo-list.component';
import { TodoItemComponent } from './todo-item.component/todo-item.component';
import { TodoDetailComponent } from './todo-detail.component/todo-detail.component';
import { NotFoundComponent } from './not-found.component/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo-list', component: TodoComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoDetailComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ HttpService, TodoService ]
})

export class AppModule { }