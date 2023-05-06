import { Injectable } from '@angular/core';

@Injectable({
  /*
    - service will be available everywhere
    - will only be loaded if used somewhere (can be three shaken)
    - therefore if used in a lazy loaded module it will only be instantiated
      when that module loads (but still added to the root injector)
  */
  providedIn: 'root'
})
export class TodosService {
  getTodos() {
    return [];
  }
}
