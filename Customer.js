class Customer {
  id = 0;
  name = "";
  discount = 0;
  constructor(id, name, discount) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDiscount() {
    return this.discount;
  }

  setDiscount(discount) {
    this.discount = discount;
  }

  toString() {
    return `${this.name}(${this.id}) (${this.discount}%)`;
  }
}

class Invoice {
  id = 0;
  customer = " ";
  amount = 0;
  constructor(id, customer, amount) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }

  getId() {
    return this.id;
  }

  getCustomer() {
    return this.customer;
  }

  setCustomer(customer) {
    this.customer = customer;
  }

  getAmount() {
    return this.amount;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  getCustomerId() {
    return this.customer.getId();
  }

  getCustomerName() {
    return this.customer.getName();
  }

  getCustomerDiscount() {
    return this.customer.getDiscount();
  }

  getAmountAfterDiscount() {
    const discount = this.customer.getDiscount() / 100;
    return this.amount - this.amount * discount;
  }

  toString() {
    return `Invoice[id=${
      this.id
    }, customer=${this.customer.toString()}, amount=${this.amount}]`;
  }
}

const main = () => {
  const customer1 = new Customer(2, "Mind", 12);
  const invoice1 = new Invoice(2, customer1, 100);
  console.log(customer1.toString());
  console.log(invoice1.getAmountAfterDiscount());
};

main();
