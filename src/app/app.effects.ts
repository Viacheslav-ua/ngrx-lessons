import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { changeUpdatedAt, clear, decrease, increase } from './reducers/counter';

@Injectable()
export class AppEffects {

  updatedAt$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(increase, decrease, clear),
      map(() => changeUpdatedAt({updatedAt: Date.now()}))
    ) })

  constructor(private actions$: Actions) {}
}
