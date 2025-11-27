import { Routes } from '@angular/router';
import { Bankaccount } from './component/bankaccount/bankaccount';
import { Login } from './component/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'bank', component: Bankaccount },
];
