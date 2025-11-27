import { Component, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bankaccount',
  imports: [JsonPipe, FormsModule],
  templateUrl: './bankaccount.html',
  styleUrl: './bankaccount.css',
})
export class Bankaccount {
  accounts = signal([
    { id: 1, name: 'Aravinda', balance: 1000, transactions: [] },
    { id: 2, name: 'Kohli', balance: 1000, transactions: [] },
  ]);
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
