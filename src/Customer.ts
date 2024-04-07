import Transaction from "./Transaction.js";
interface InterfaceCustomer {
  name: string;
  id: number;
  transactions: Transaction[];
  getName(): string;
  getId(): number;
  getTransactions(): Transaction[];
  getBalance(): number;
  addTransactions(amount: number): boolean;
}
class Customer implements InterfaceCustomer{
  name: string;
  id: number;
  transactions: Transaction[];

  constructor(name: string, id: number) {
    try {
      if (typeof name !== "string") throw "Wrong input name";
      if (typeof id !== "number") throw "Wrong input id";
      this.name = name;
      this.id = id;
      this.transactions = [];
    } catch (error) {
      console.log(error);
    }
  }
  getName(): string {
    return this.name;
  }
  getId(): number {
    return this.id;
  }
  getTransactions(): Transaction[] {
    return this.transactions;
  }
  getBalance(): number {
    const customerBalance = this.transactions.reduce(
      (balance, transactions) => balance + transactions.amount,
      0
    );
    return customerBalance;
  }

  addTransactions(amount: number): boolean {
    let condition = this.getBalance() + amount;
    if (condition < 0) {
      console.log("sorry, we cannot make this transaction");
    } else if (condition >= 0) {
      this.transactions.push(new Transaction(amount, new Date()));
      return true;
    }
    return false;
  }
}

export default Customer;
