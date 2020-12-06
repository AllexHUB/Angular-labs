import {Component, ViewChild} from '@angular/core';
import {Comp2Component} from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab';
  string = 'This is new string. ' +
    'COVID - 2019. ' +
    'Hope it will end soon...';
  isLoggedIn = false;
  currentDate = new Date();
  @ViewChild(Comp2Component, {static: false}) countComp: Comp2Component;
  login(): void {
    this.isLoggedIn = true;
  }
  increment(): void {
    this.countComp.increment();
  }
  decrement(): void {
    this.countComp.decrement();
  }
}
