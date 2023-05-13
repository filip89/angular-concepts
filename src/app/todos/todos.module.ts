import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosDetailsComponent } from './components/todos-details/todos-details.component';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosCreateComponent } from './components/todos-create/todos-create.component';
import { RatingInputModule } from '../widgets/rating-input/rating-input.module';

@NgModule({
  declarations: [TodosListComponent, TodosDetailsComponent, TodosComponent, TodosCreateComponent],
  imports: [CommonModule, ReactiveFormsModule, TodosRoutingModule, RatingInputModule]
})
export class TodosModule {}
