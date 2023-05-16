import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTimeAfterFirst } from '../../../core/operators/debounceTimeAfterFirst';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos$?: Observable<Todo[]>;
  searchControl = new FormControl('', { nonNullable: true });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
      ActivatedRouteSnapshot holds properties related to the route as static values (collected at the moment)
      while ActivatedRoute holds those properties as observables.
    */
    const allTodos: Todo[] = this.route.snapshot.data['todos'];
    const search$ = this.searchControl.valueChanges.pipe(startWith(''));
    this.todos$ = search$.pipe(
      debounceTimeAfterFirst(500),
      map((search) => allTodos.filter((todo) => todo.title.includes(search)))
    );
  }
}
