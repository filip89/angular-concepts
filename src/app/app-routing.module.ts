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
      @HINT Guards can prevent access to routes, when a router finds a matching route branch it will check each of the guards (nested also),
      and if any fail, route won't be activated. Also, none of the resolvers will run until all guards have passed - even
      if deeply nested guard fails, none of the resolvers would trigger
    */
    canActivate: [authGuard],
    /*
      @HINT Module will be lazy loaded, bundles only fetched when route is accessed.
      Lazy loaded module also creates its own injector which can be configured with specific providers.
      If a service is not available in the injector it will look in a parent injector, in this case the root.
      We can also add providers on a component level. When angular resolves the dependency in a component it will first
      check the components providers, if it doesn't find a match it will check the parent component and when it runs out
      of ancestor components it will start checking in the modules, as described above.
    */
    loadChildren: () => import('./todos/todos.module').then((m) => m.TodosModule)
  }
];

@NgModule({
  /*
    @HINT Reason forRoot is used here is because it will also provide a router service.
    Since only one router should exist in an application, other modules should use
    forChild since it doesn't create a new router service.
  */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
