package com.BankingApplication.controller;

import com.BankingApplication.dto.AccountDto;
import com.BankingApplication.service.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/accounts")

public class AccountController {

    private AccountService accountService;

    public AccountController(AccountService accountService) {
        super();
        this.accountService = accountService;
    }


    //add account rest api
    @PostMapping
    public ResponseEntity<AccountDto> addAccount(@RequestBody AccountDto accountDto){

        System.out.println(accountDto);
        return new ResponseEntity<>(accountService.createAccount(accountDto), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountDto> getAccountbyId(@PathVariable Long id){
        AccountDto accountDto = accountService.getAccountById(id);
        return ResponseEntity.ok(accountDto);
    }

    @PutMapping("/{id}/deposit")
    public ResponseEntity<AccountDto> deposit(@PathVariable Long id, @RequestBody Map<String, Double> request){
        Double amount = request.get("amount");
        AccountDto accountDto = accountService.deposit(id, amount);
        return ResponseEntity.ok(accountDto);
    }

    @PutMapping("/{id}/withdraw")
    public ResponseEntity<AccountDto> withdraw(@PathVariable Long id, @RequestBody Map<String, Double> request){
        Double amount = request.get("amount");
        AccountDto accountDto = accountService.withdraw(id,amount);
        return ResponseEntity.ok(accountDto);
    }

    @PutMapping("/{fromAccountId}/transfer/{toAccountId}")
    public ResponseEntity<AccountDto> transfer(
            @PathVariable Long fromAccountId,
            @PathVariable Long toAccountId,
            @RequestBody Map<String, Double> request) {

        Double amount = request.get("amount");
        AccountDto accountDto = accountService.transfer(fromAccountId, toAccountId, amount);
        return ResponseEntity.ok(accountDto);
    }


    @GetMapping
    public ResponseEntity<List<AccountDto>>getAllAccounts(){
        List<AccountDto> accountDto = accountService.getAllAccounts();
        return ResponseEntity.ok(accountDto);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteAccount(@PathVariable Long id) {
        accountService.deleteAccount(id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Account deleted successfully!");
        return ResponseEntity.ok(response);
    }


}
