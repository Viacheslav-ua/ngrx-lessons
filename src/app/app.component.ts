import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { clear, decrease, increase, selectCount, selectUpdatedAt } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count$ = this.store.select(selectCount)
  cannotDecrease$ = this.count$.pipe(
    map(count => count <= 0)
  )
  updatedAt$ = this.store.select(selectUpdatedAt)

  constructor(private store: Store) {}

  increase(): void {
    this.store.dispatch(increase())
  }
  decrease(): void {
    this.store.dispatch(decrease())
  }
  clear(): void {
    this.store.dispatch(clear())
  }
}
