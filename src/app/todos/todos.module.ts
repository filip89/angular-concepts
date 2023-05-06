import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './pages/todos-list/todos-list.component';
import { TodosDetailsComponent } from './pages/todos-details/todos-details.component';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosListComponent, TodosDetailsComponent, TodosComponent],
  imports: [CommonModule, TodosRoutingModule]
})
export class TodosModule {}
