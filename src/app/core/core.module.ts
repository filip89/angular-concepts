import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interceptorProviders } from './interceptors';
import { LocalStorage } from './injection-tokens/LocalStorage';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  /*
    Usually we provide services by simply listing a service class itself,
    which is just a shorthand for { provide: SomeService, useClass: SomeService },
    we can't do that with local storage, so we create a token ourselves and specify which value to use.
    - we could have also created a service that wraps localStorage and inject that service the usual way
  */
  providers: [{ provide: LocalStorage, useValue: localStorage }, interceptorProviders]
})
export class CoreModule {}
