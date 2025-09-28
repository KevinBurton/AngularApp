import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',

  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {
  protected readonly title = signal('Counter Page');
  protected readonly count = signal(0);

  protected increment() {
    this.count.update((c) => c + 1);
  }
  protected decrement() {
    this.count.update((c) => c - 1);
  } 
  protected reset() {
    this.count.set(0);
  }
}