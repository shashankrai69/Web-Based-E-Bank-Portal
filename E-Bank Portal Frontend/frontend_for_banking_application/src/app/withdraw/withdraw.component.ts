import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdraw',
  standalone: false,
  
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent {

  id:number=0;
  account:Account=new Account();

  constructor(private accountService:AccountService,private route:ActivatedRoute,private router:Router){}

  
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data=>{
      this.account = data;
    })
  }


successMessage="";
errorMessage="";

  onSubmit(){
    if(this.isValidAmount(this.account.balance)){

    this.accountService.Withdraw(this.id,this.account.balance).subscribe(data=>{
      this.account=data;
      this.successMessage="Withdraw Success."
      setTimeout(()=>{
        this.router.navigate(['/account'])
      }, 3000);
      
    })
  }else if(this.account.balance>1000000){
    this.errorMessage="Amount exceeded maximum limit of 1000000"
    setTimeout(()=>{
      this.errorMessage=""
    },3000);
  }
  
  else{
    this.errorMessage="Invalid Amount, Please enter valid amount"
    setTimeout(()=>{
      this.errorMessage=""
    }, 2000);
  }
  }
  
  isValidAmount(amount:number):boolean{
    return amount>0 && amount<10000
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

