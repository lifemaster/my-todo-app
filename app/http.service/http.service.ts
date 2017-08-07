import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  getTodoList() {
    return this.http.get('data.json');
  }
}