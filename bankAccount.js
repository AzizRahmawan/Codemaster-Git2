import faker from "faker";
export class BankAccount{
    balance = 0;
    //transactions = [];

    constructor(owner){
        this.number = faker.finance.account().toString();
        this.owner = owner;
    }
    deposit(amount){
        this.balance += amount;   
    }

}