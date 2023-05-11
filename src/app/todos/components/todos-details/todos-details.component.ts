import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {
  todo?: Observable<Todo>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*
      With an observable with can use async pipe to automatically subscribe and unsubscribe to it.
      In this case we could, for example, route to another todo details page (from this page)
      which would trigger the same route and same component instance would be used so constructor and lifecycle hooks
      (ngOnInit in this case) would not be called again (unless we set up a custom RouteReuseStrategy).
      So if we used 'route.snapshot.data.todo' we would be stuck with the wrong todo.
      Instead, here we subscribe to route data as an observable and always get the correct todo
    */
    this.todo = this.route.data.pipe(map((data) => data['todo']));
  }
}
