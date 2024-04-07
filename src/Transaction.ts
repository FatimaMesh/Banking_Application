interface InterfaceTransaction {
  amount: number;
  date: Date;
}
class Transaction implements InterfaceTransaction {
  amount: number;
  date: Date;
  constructor(amount: number, date: Date) {
    try {
      if (typeof amount !== "number") throw "Wrong input";
      this.amount = amount;
      this.date = date;
    } catch (error) {
      console.log(error);
    }
  }
}

export default Transaction;
