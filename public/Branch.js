class Branch {
    constructor(name) {
        try {
            if (typeof name !== "string")
                throw "Wrong input name";
            this.name = name;
            this.customers = [];
        }
        catch (error) {
            console.log(error);
        }
    }
    getName() {
        return this.name;
    }
    getCustomers() {
        return this.customers;
    }
    addCustomer(customer) {
        if (!this.customers.includes(customer)) {
            this.customers = [...this.customers, customer];
            return true;
        }
        else {
            console.log(`${customer.name} already There ..!`);
            return false;
        }
    }
    addCustomerTransaction(customerId, amount) {
        const findCustomer = this.customers.find((customer) => customer.id === customerId);
        if (findCustomer) {
            findCustomer.addTransactions(amount);
            return true;
        }
        return false;
    }
    searchCustomerByName(customerName) {
        const searchCustomer = this.customers.filter((customer) => customer.name.toLowerCase() === customerName.toLowerCase());
        return searchCustomer.length ? searchCustomer : null;
    }
}
export default Branch;
