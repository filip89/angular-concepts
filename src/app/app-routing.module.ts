import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //since with the default pathMatch: 'prefix' any route would match '' so angular throws an error
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    //module will be lazy loaded, bundles only fetched when route is accessed
    loadChildren: () => import('./todos/todos.module').then((m) => m.TodosModule)
  }
];

@NgModule({
  /*
    reason forRoot is used here is because it will also provide a router service,
    since only one router should exist in an application lazy loaded modules should use
    forChild since it doesn't create a new router service
  */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
