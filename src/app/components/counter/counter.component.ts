import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count : WritableSignal<number> = signal(0);

  incrementValueByOne(): number {
    this.count.update(value => value + 1)
    return this.count();
  }

  decrementValueByOne(): number {
    this.count.update(value => value - 1);
    return this.count();
  }

  resetValue(): number {
    this.count.set(0);
    return this.count();
  }

}
