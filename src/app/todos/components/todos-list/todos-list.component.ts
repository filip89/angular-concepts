import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos?: Todo[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
  we use a simple way to get the data here, although we could have used router.data
  instead and subscribed to it or set up todos as an observable and used an async pipe in the template
  (we'll do that in the details page example)
  - ActivatedRouteSnapshot holds properties related to the route as static values (collected at the moment)
    while ActivatedRoute holds those properties as observables
*/
    this.todos = this.route.snapshot.data['todos'];
  }
}
