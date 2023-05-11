import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosComponent } from './todos.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { todosResolver } from './resolvers/todos.resolver';
import { TodosEditComponent } from './components/todos-edit/todos-edit.component';
import { todoResolver } from './resolvers/todo.resolver';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '',
        component: TodosListComponent,
        resolve: {
          todos: todosResolver
        }
      },
      {
        path: ':id',
        component: TodosDetailsComponent,
        resolve: {
          todo: todoResolver
        }
      },
      {
        path: ':id/edit',
        component: TodosEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
