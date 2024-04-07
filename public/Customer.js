import Transaction from "./Transaction.js";
class Customer {
    constructor(name, id) {
        try {
            if (typeof name !== "string")
                throw "Wrong input name";
            if (typeof id !== "number")
                throw "Wrong input id";
            this.name = name;
            this.id = id;
            this.transactions = [];
        }
        catch (error) {
            console.log(error);
        }
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        const customerBalance = this.transactions.reduce((balance, transactions) => balance + transactions.amount, 0);
        return customerBalance;
    }
    addTransactions(amount) {
        let condition = this.getBalance() + amount;
        if (condition < 0) {
            console.log("sorry, we cannot make this transaction");
        }
        else if (condition >= 0) {
            this.transactions.push(new Transaction(amount, new Date()));
            return true;
        }
        return false;
    }
}
export default Customer;
