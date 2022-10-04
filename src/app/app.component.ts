import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter = 0
  updatedAt?:number

  get cannotDecrease(): boolean {
    return this.counter <= 0
  }

  increase(): void {
    this.updated()
    this.counter++
  }
  decrease(): void {
    this.updated()
    this.counter--
  }
  clear(): void {
    this.updated()
    this.counter = 0
  }

  private updated(): void {
    this.updatedAt = Date.now()
  }
}
