import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transfer',
  standalone: true, // Mark as standalone
  imports: [RouterModule, FormsModule], // Add necessary imports
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class transferComponent {
  senderId: number = 0;
  receiverId: number = 0;
  amount: number = 0;
  message: string = '';

  constructor(private accountService: AccountService, private router: Router) {}

  onSubmit() {
    if (this.amount <= 0) {
      this.message = 'Amount must be greater than zero.';
      return;
    }
  
    const transferData = {
      senderId: this.senderId,
      receiverId: this.receiverId,
      amount: this.amount,
    };
  
    this.accountService.transfer(transferData).subscribe(
      response => {
        console.log('Transaction successful:', response);
        this.message = 'Transaction completed successfully!';
        this.router.navigate(['/accounts']);
      },
      error => {
        console.error('Transaction failed:', error);
        this.message = 'Transaction failed. Please try again.';
      }
    );
  }
  
}

