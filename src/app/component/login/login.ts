import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bankaccount } from '../bankaccount/bankaccount';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgFor, Bankaccount],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  users = {
    name: '',
    phone: '',
    email: '',
    password: '',
    accountNumber: '',
  };

  userList: any[] = [];

  constructor() {
    this.loadUsers();
  }

  onSubmit() {
    let userList = JSON.parse(localStorage.getItem('users') || '[]');
    userList.push(this.users);
    localStorage.setItem('users', JSON.stringify(userList));
    alert('Registration successful!');
  }
  loadUsers() {
    this.userList = JSON.parse(localStorage.getItem('users') || '[]');
  }
}
