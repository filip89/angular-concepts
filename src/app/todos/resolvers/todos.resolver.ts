import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TodosApiService } from '../services/todos-api.service';
import { Todo } from '../models/todo';
import { map } from 'rxjs';

export const todosResolver: ResolveFn<Todo[]> = () => {
  return inject(TodosApiService)
    .getTodos()
    .pipe(map((todos) => todos.slice(0, 10)));
};
