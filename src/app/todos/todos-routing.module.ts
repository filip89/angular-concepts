import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosComponent } from './todos.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { todosResolver } from './resolvers/todos.resolver';
import { todoResolver } from './resolvers/todo.resolver';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';

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
        path: 'create',
        component: TodosCreateComponent
      },
      {
        path: ':id',
        component: TodosDetailsComponent,
        resolve: {
          todo: todoResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
