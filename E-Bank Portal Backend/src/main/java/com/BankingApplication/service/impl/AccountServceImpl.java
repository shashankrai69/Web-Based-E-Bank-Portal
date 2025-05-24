package com.BankingApplication.service.impl;

import com.BankingApplication.dto.AccountDto;
import com.BankingApplication.entity.Account;
import com.BankingApplication.mapper.AccountMapper;
import com.BankingApplication.repository.AccountRepository;
import com.BankingApplication.service.AccountService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccountServceImpl implements AccountService {

    public AccountServceImpl(AccountRepository accountRepository) {
        super();
        this.accountRepository = accountRepository;
    }

    private AccountRepository accountRepository;

    @Override
    public AccountDto createAccount(AccountDto accountDto) {

        Account account = AccountMapper.mapToAccount(accountDto);
        Account savedAccount = accountRepository.save(account);
        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public AccountDto getAccountById(Long id){

        Account account = accountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account does not exixst") );

        return AccountMapper.mapToAccountDto(account);
    }

    @Override
    public AccountDto deposit(Long id, double amount) {

        Account account = accountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account does not exixst") );

        double totalBalance = account.getBalance()+amount;
        account.setBalance(totalBalance);
        Account savedAccount = accountRepository.save(account);

        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public AccountDto withdraw(Long id, double amount) {

        Account account = accountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account does not exixst") );
        if(account.getBalance()<amount){
            throw new RuntimeException("Insufficient Balance");
        }
        double totalBalance = account.getBalance()-amount;
        account.setBalance(totalBalance);
        Account savedAccount = accountRepository.save(account);
        return AccountMapper.mapToAccountDto(savedAccount);
    }

    @Override
    public AccountDto transfer(Long fromAccountId, Long toAccountId, double amount) {

        //find sender account
        Account fromAccount = accountRepository.findById(fromAccountId)
                .orElseThrow(() -> new RuntimeException("Sender account does not exist"));

        // Check if the sender has enough balance
        if (fromAccount.getBalance() < amount) {
            throw new RuntimeException("Insufficient Balance in sender's account");
        }

        // Find receiver account
        Account toAccount = accountRepository.findById(toAccountId)
                .orElseThrow(() -> new RuntimeException("Receiver account does not exist"));

        // Deduct from sender
        fromAccount.setBalance(fromAccount.getBalance() - amount);

        // Add to receiver
        toAccount.setBalance(toAccount.getBalance() + amount);

        // Save updated accounts
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        // Return the updated sender account details as a confirmation
        return AccountMapper.mapToAccountDto(fromAccount);
    }


    @Override
    public List<AccountDto> getAllAccounts() {
        return accountRepository.findAll().stream().map((account)->AccountMapper.mapToAccountDto(account)).collect(Collectors.toList());

    }

    @Override
    public void deleteAccount(Long id) {
        Account account = accountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account does not exixst"));
        accountRepository.delete(account);
    }

}
