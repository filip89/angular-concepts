import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';

@NgModule({
  declarations: [TodosListComponent, TodosDetailsComponent, TodosComponent, TodosCreateComponent],
  imports: [CommonModule, ReactiveFormsModule, TodosRoutingModule]
})
export class TodosModule {}
