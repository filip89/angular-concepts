import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosApiService } from '../../services/todos-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.scss']
})
export class TodosCreateComponent {
  formGroup = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    difficulty: new FormControl(3, { nonNullable: true })
  });

  constructor(private todosApi: TodosApiService, private router: Router) {}

  onSubmit() {
    /*
      Here we use reactive forms which are generally recommended.
      Alternatively we can use simpler template forms which offer a directive
      that basically wraps and sets up a FormControl for us.
    */
    this.todosApi
      .create(this.formGroup.getRawValue())
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
