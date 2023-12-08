export class Bank {
    accounts = [];
    constructor(name){
        this.name = name;
    }
    addAccount(acccount){
        this.accounts.push(acccount);
    }
    getAccount(number){
        return this.accounts.find((account) => account.number === number);
    }
    deleteAccount(number){
        return this.accounts.splice((account) => account.number === number);
    }
    listAccounts(){
        return this.accounts;
    }
}