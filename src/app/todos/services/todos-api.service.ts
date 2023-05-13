import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  /*
    - service will be available everywhere
    - will only be loaded if used somewhere (can be tree shaken)
    - therefore if used in a lazy loaded module it will only be instantiated
      when that module loads (but still added to the root injector)
  */
  providedIn: 'root'
})
export class TodosApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  filter() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  get(id: number) {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`);
  }

  create(todo: Pick<Todo, 'title' | 'difficulty'>) {
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo);
  }
}
