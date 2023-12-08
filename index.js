import { Bank } from "./bank.js";
import { BankAccount } from "./bankAccount.js";

const bca = new Bank('BCA');
const mandiri = new Bank('Mandiri');

// create new accounts
const johnsAccount = new BankAccount('John Doe');
const janesAccount = new BankAccount('Jane Doe');
const jacksAccount = new BankAccount('Jack Doe');

// add accounts to the bank
bca.addAccount(johnsAccount);
bca.addAccount(janesAccount);
mandiri.addAccount(jacksAccount);

johnsAccount.deposit(1000000);

const bcaAccounts = bca.listAccounts();
for (const account of bcaAccounts) {
    console.log(account);
}