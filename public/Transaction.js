class Transaction {
    constructor(amount, date) {
        try {
            if (typeof amount !== "number")
                throw "Wrong input";
            this.amount = amount;
            this.date = date;
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default Transaction;
