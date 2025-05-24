import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-account-list',
  standalone: false,
  
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{

accounts:Account[]=[];
  

  constructor(private accountService:AccountService, private router: Router, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.getAccounts();
  }

  getAccounts(){
    this.accountService.getAllAccounts().subscribe(data=>{
      console.log('Fetched accounts:', data);
      this.accounts=data;
    });
  }

  deposit(id:number) {
    this.router.navigate(['/deposit',id])
  }

  withdraw(id:number){
    this.router.navigate(['/withdraw',id])
  }

  delete(id: number) {
    this.accountService.delete(id).subscribe({
      next: (response: any) => {
        console.log('Delete response:', response);
        this.accounts = this.accounts.filter((account) => account.id !== id);
      },
      error: (error) => {
        console.error('Error deleting account:', error);
      },
    });
  }



  
}
