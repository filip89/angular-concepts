import { concat, debounceTime, Observable, take } from 'rxjs';

export function debounceTimeAfterFirst<T>(time: number) {
  return (source$: Observable<T>) =>
    concat(source$.pipe(take(1)), source$.pipe(debounceTime(time)));
}
