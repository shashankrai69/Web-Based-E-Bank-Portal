import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { transferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    CreateAccountComponent,
    DepositComponent,
    WithdrawComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
