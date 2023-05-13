import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Todo } from '../models/todo';
import { inject } from '@angular/core';
import { TodosApiService } from '../services/todos-api.service';

export const todoResolver: ResolveFn<Todo> = (route: ActivatedRouteSnapshot) => {
  const todoId = route.paramMap.get('id');
  if (!todoId) {
    throw new Error('Missing todo id');
  }
  return inject(TodosApiService).get(+todoId);
};
