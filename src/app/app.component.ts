import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp';

  timeLeft: number = 60;
  interval;
  public count: number = 0;
  public sum;

  public startTimer(): void {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  public pauseTimer(): void {
    clearInterval(this.interval);
  }

  public counter(): void {
    this.count += 1;
  }

  public AddNumbers(): void {
    let v = parseFloat(( < HTMLInputElement > document.getElementById("Text1")).value);
    let v1 = parseFloat(( < HTMLInputElement > document.getElementById("Text2")).value);
    this.sum = v + v1;
  }

}
