import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: number = 0;
  counter: number = 0;

  onStartGame(): void {
    this.interval = window.setInterval(() => this.intervalFired.emit(++this.counter), 1000);
  }

  onPauseGame(): void {
    clearInterval(this.interval);
  }
}
