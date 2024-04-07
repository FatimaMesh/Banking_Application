import Branch from "./Branch";
import Customer from "./Customer";

interface InterfaceBank {
  name: string;
  branches: Branch[];
  addBranch(branch: Branch): Boolean;
  addCustomer(branch: Branch, customer: Customer): boolean;
  addCustomerTransaction(
    branch: Branch,
    customerId: number,
    amount: number
  ): boolean;
  findBranchByName(branchName: string): Branch | undefined;
  checkBranch(branch: Branch): boolean;
  listCustomers(branch: Branch, includeTransactions: boolean): void;
  listCustomerWithoutTransaction(branch: Branch): void;
}
class Bank implements InterfaceBank {
  name: string;
  branches: Branch[];

  constructor(name: string) {
    try {
      if (typeof name !== "string") throw "Wrong input name";
      this.name = name;
      this.branches = [];
    } catch (error) {
      console.log(error);
    }
  }

  addBranch(branch: Branch): boolean {
    if (!this.checkBranch(branch)) {
      this.branches.push(branch);
      console.log(`${branch.name} added successfully`);
      return true;
    } else {
      console.log(`${branch.name} already There ..!`);
      return false;
    }
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    const findBranch = this.branches.find((b) => b.name === branch.name);
    if (findBranch) {
      if (!findBranch.customers.includes(customer)) {
        findBranch.customers = [...findBranch.customers, customer];
        return true;
      } else {
        console.log(`${customer.name} already There ..!`);
        return false;
      }
    } else {
      console.log(`${branch.name} Not There ..!`);
      return false;
    }
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: number,
    amount: number
  ): boolean {
    const findBranch = this.branches.find((b) => b.name === branch.name);
    if (findBranch) {
      findBranch.addCustomerTransaction(customerId, amount);
      return true;
    } else {
      console.log(`The process is unsuccessfully!`);
      return false;
    }
  }

  findBranchByName(branchName: string): Branch | undefined {
    return this.branches.find(
      (element) => element.name.toLowerCase() === branchName.toLowerCase()
    );
  }

  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch);
  }

  //list customer with transactions detail
  listCustomers(branch: Branch, includeTransactions: boolean): void {
    if (this.checkBranch(branch) && branch.customers.length) {
      if (includeTransactions) {
        branch.getCustomers().forEach((customer) => {
          console.log(`id: ${customer.id} name: ${customer.name}`);
          if (customer.transactions.length) {
            console.log(`Transaction:`);
            customer.getTransactions().map((transaction) => {
              console.log(
                `amount: ${transaction.amount} date: ${transaction.date}`
              );
            });
          } else console.log("No Transaction yet");
        });
      } else this.listCustomerWithoutTransaction(branch);
    } else {
      console.log(
        `There is something wrong, may be ${branch.name} Not There or don't has Customers!`
      );
    }
  }
  //list only customers data without transactions part
  listCustomerWithoutTransaction(branch: Branch) {
    console.log(
      branch
        .getCustomers()
        .map((customer) => ({ id: customer.id, name: customer.name }))
    );
  }
}
export default Bank;
