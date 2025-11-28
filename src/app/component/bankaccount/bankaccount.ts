import { Component, signal, input, output } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankaccount',
  imports: [FormsModule, NgFor],
  templateUrl: './bankaccount.html',
  styleUrl: './bankaccount.css',
})
export class Bankaccount {
  accounts = signal([
    { id: 1, name: 'Aravinda', balance: 1000, transactions: [] },
    { id: 2, name: 'Kohli', balance: 1000, transactions: [] },
  ]);

  title = input('Hello This is bank website, and i am learning angular');
  showButton() {
    console.log('Button is clicked');
    alert('This is pay Button');
  }

  label = input('');

  btnclicked = output();
  handleButtonClick() {
    this.btnclicked.emit();
  }

  @Input() userdata: any[] = [];
  balance = signal(1000);
  depositAmount: number = 0;

  depositForm(amount: number) {
    this.balance.update((val) => val + amount);
  }

  withdrawForm(amount: number) {
    this.balance.update((val) => val - amount);
  }
  deposit(id: number, amount: number) {
    this.accounts.update((accs) => {
      const updated = [...accs];
      const account = updated.find((a) => a.id === id);

      if (account) {
        account.balance += amount;
      }

      return updated;
    });
  }

  withdraw(id: number, amount: number) {
    this.accounts.update((accs) => {
      const updated = [...accs];
      const account = updated.find((a) => a.id === id);

      if (account) {
        account.balance -= amount;
      }

      return updated;
    });
  }
}
