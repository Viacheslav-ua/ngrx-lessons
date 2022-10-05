import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { clear, decrease, increase, selectCount } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  updatedAt?: number

  count$ = this.store.select(selectCount)
  cannotDecrease$ = this.count$.pipe(
    map(count => count <= 0)
  )

  constructor(private store: Store) {}

  increase(): void {
    this.updated()
    this.store.dispatch(increase())
  }
  decrease(): void {
    this.updated()
    this.store.dispatch(decrease())
  }
  clear(): void {
    this.updated()
    this.store.dispatch(clear())
  }

  private updated(): void {
    this.updatedAt = Date.now()
  }
}
