import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosComponent } from './todos.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    children: [
      {
        path: '',
        component: TodosListComponent
      },
      {
        path: ':id',
        component: TodosDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}
