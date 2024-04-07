import Customer from "./Customer";
interface InterfaceBranch {
  name: string;
  customers: Customer[];
  getName(): string;
  getCustomers(): Customer[];
  addCustomer(customer: Customer): boolean;
  addCustomerTransaction(customerId: number, amount: number): boolean;
  searchCustomerByName(customerName: string): Customer[] | null;
}
class Branch implements InterfaceBranch {
  name: string;
  customers: Customer[];

  constructor(name: string) {
    try {
      if (typeof name !== "string") throw "Wrong input name";
      this.name = name;
      this.customers = [];
    } catch (error) {
      console.log(error);
    }
  }

  getName(): string {
    return this.name;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(customer: Customer): boolean {
    if (!this.customers.includes(customer)) {
      this.customers = [...this.customers, customer];
      return true;
    } else {
      console.log(`${customer.name} already There ..!`);
      return false;
    }
  }

  addCustomerTransaction(customerId: number, amount: number): boolean {
    const findCustomer = this.customers.find(
      (customer) => customer.id === customerId
    );
    if (findCustomer) {
      findCustomer.addTransactions(amount);
      return true;
    }
    return false;
  }

  searchCustomerByName(customerName: string): Customer[] | null {
    const searchCustomer = this.customers.filter(
      (customer) => customer.name.toLowerCase() === customerName.toLowerCase()
    );
    return searchCustomer.length ? searchCustomer : null;
  }
}

export default Branch;
