import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { Bankaccount } from './component/bankaccount/bankaccount';
// import { Login } from './component/login/login';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, Bankaccount, Login],
  // template: '<app-bankaccount></app-bankaccount><app-login></app-login>',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
