package com.BankingApplication.service;

import com.BankingApplication.dto.AccountDto;

import java.util.List;

public interface AccountService {
    AccountDto createAccount(AccountDto account);

    AccountDto getAccountById(Long id);

    AccountDto deposit(Long id, double amount);

    AccountDto withdraw(Long id, double amount);

    AccountDto transfer(Long fromAccountId, Long toAccountId, double amount);

    List<AccountDto> getAllAccounts();

    void deleteAccount(Long id);
}
