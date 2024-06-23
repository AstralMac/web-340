// Green- Make the test pass:
const EventEmitter = require("events");

class BankAccount extends EventEmitter{
  constructor(){
    super();
    this.balance = 0;
  }

  deposit(amount){
    if(amount <= 0){
      this.emit("error", new Error("Deposit amount must be greater than 0."));
    }
    this.balance =+ amount;
    this.emit("deposit", amount);
  }

  withdraw(amount){
    if (amount > this.balance){
      const error = new Error("insufficient funds.");
      error.withdrawAmount = amount;
      this.emit("insufficientFunds", error);
      return;
    }
    this.balance -= amount;
    this.emit("withdraw", amount);
  }
}
const account = new BankAccount();

account.on("insufficientFunds", (error)=>{
  console.log('Attempted to withdraw ${error.withdrawAmount}, but only ${account.balance} available.');
});

account.deposit(100);
account.withdraw(50);
account.withdraw(60);

module.exports = BankAccount;