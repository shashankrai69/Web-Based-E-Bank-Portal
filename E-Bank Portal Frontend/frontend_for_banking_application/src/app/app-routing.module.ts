import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { transferComponent } from './transfer/transfer.component';

const routes: Routes = [

  {path: 'accounts', component:AccountListComponent},
  {path: 'create-account', component:CreateAccountComponent},
  {path: '', redirectTo:'accounts', pathMatch:'full'},
  {path: 'deposit/:id', component:DepositComponent},
  {path: 'withdraw/:id', component:WithdrawComponent},
  {path: 'transfer', loadComponent: () => import('./transfer/transfer.component').then(m => m.transferComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
