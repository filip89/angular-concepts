import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    //since with the default pathMatch: 'prefix' any route would match '' so angular throws an error
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    /*
      Guards can prevent access to routes, when a router finds a matching route branch it will check each of the guards (nested also),
      and if a single fails, route won't be activated. Also, any of the resolvers won't run until all guards have passed - even
      if deeply nested guard fails, none of the resolvers would trigger //TODO
    */
    canActivate: [authGuard],
    /*
      Module will be lazy loaded, bundles only fetched when route is accessed
      lazy loaded module also creates its own injector which can be configured with specific providers,
      if a service is not available in the injector it will look in a parent injector, in this case the root
    */
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
