import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = "http://localhost:8080/api/accounts";

  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}`, account);
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`);
  }

  deposit(id: number, amount: number): Observable<Account> {
    const request = { amount };
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/deposit`, request);
  }

  Withdraw(id: number, amount: number): Observable<Account> {
    const request = { amount };
    return this.httpClient.put<Account>(`${this.baseUrl}/${id}/withdraw`, request);
  }

  transfer(transferData: { senderId: number; receiverId: number; amount: number }): Observable<any> {
    const url = `${this.baseUrl}/${transferData.senderId}/transfer/${transferData.receiverId}`;
    return this.httpClient.put(url, { amount: transferData.amount });
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // New method to search accounts by name or ID
  searchAccounts(query: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}/search?query=${query}`);
  }
}

