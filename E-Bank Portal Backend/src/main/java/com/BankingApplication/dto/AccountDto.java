package com.BankingApplication.dto;

public class AccountDto {
    public AccountDto(Long id, String accountHolderName, double balance) {
        this.id = id;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public String getAccountHolderName() {
        return accountHolderName;
    }

    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    private String accountHolderName;



    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    private double balance;

    public AccountDto(){
        super();
    }

}
