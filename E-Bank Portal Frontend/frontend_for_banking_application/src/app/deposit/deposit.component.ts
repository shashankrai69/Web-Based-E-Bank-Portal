import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: false,
  
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  id:number=0;
  account:Account=new Account();

  constructor(private accountService:AccountService, private rout:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id=this.rout.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data=>{
      this.account=data;
    })
  }

  successMessage="";
  errorMessage="";

  onSubmit(){
    if(this.isVAlidAmount(this.account.balance)){

    
    this.accountService.deposit(this.id,this.account.balance).subscribe(data=>{
      this.account=data;
      this.successMessage="Deposit Successfull!"
      setTimeout(()=>{
        this.successMessage=""
      }, 5000);
    })
    }else{
      this.errorMessage="Invalid amount, please enter valid amount."
      setTimeout(()=>{
        this.errorMessage=""
      }, 3000);
    }
  }


  isVAlidAmount(amount:number):boolean{
    return amount>0 && amount<1000000000000
  }

}
