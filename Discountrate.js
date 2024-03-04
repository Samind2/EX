class Customer {
  name = "";
  member = false;
  memberType = 0;
  constructor(name, member = false, memberType) {
    this.name = name;
    this.member = member;
    this.memberType = memberType;
  }

  getName() {
    return this.name;
  }

  isMember() {
    return this.member;
  }

  setMember(member) {
    this.member = member;
  }

  getMemberType() {
    return this.memberType.getDiscountRate();
  }

  setMemberType(memberType) {
    this.memberType = memberType;
  }

  toString() {
    return `Customer[name = ${this.name}, member = ${
      this.member
    }, memberType = ${this.getMemberType()}]`;
  }
}

class Visit {
  customer = null;
  date = "";
  serviceExpense = 0;
  productExpense = 0;
  constructor(customer, date, serviceExpense, productExpense) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
  }

  getName() {
    return this.name;
  }

  getServiceExpense() {
    return this.serviceExpense;
  }

  setServiceExpense(serviceExpense) {
    this.serviceExpense = serviceExpense;
  }

  getProductExpense() {
    return this.productExpense;
  }

  setProductExpense(productExpense) {
    this.productExpense = productExpense;
  }

  getTotalExpense() {
    let total = 0;
    if (
      this.customer.memberType == DiscountRate.PGOLD ||
      this.customer.memberType == DiscountRate.PPREMIUM ||
      this.customer.memberType == DiscountRate.PSILVER
    ) {
      total =
        this.serviceExpense +
        this.productExpense -
        this.productExpense * this.customer.getMemberType();
    } else if (
      this.customer.memberType == DiscountRate.SGOLD ||
      this.customer.memberType == DiscountRate.SPREMIUM ||
      this.customer.memberType == DiscountRate.SSILVER
    ) {
      total =
        this.serviceExpense +
        this.productExpense -
        this.serviceExpense * this.customer.getMemberType();
    } else {
      total = this.serviceExpense + this.productExpense;
    }
    return total;
  }

  toString() {
    return `Visit[${this.customer.toString()}, serviceExpense = ${
      this.serviceExpense
    }, productExpense = ${
      this.productExpense
    }, total = ${this.getTotalExpense()}]`;
  }
}

class DiscountRate {
  static SPREMIUM = new DiscountRate(0.2);
  static SGOLD = new DiscountRate(0.15);
  static SSILVER = new DiscountRate(0.1);
  static PPREMIUM = new DiscountRate(0.1);
  static PGOLD = new DiscountRate(0.1);
  static PSILVER = new DiscountRate(0.1);

  constructor(name) {
    this.name = name;
  }

  getDiscountRate() {
    return this.name;
  }

  // getServiceDiscountRate() {
  //   return this.name;
  // }

  // getProductDiscountRate() {
  //   return this.name;
  // }
}

const main = () => {
  const customer1 = new Customer("Bell", true, DiscountRate.SPREMIUM);
  const customer2 = new Customer("NJ", true, DiscountRate.SPREMIUM);
  const visit1 = new Visit(customer1, "2024/02/13", 800, 400);
  const visit2 = new Visit(customer2, "2024/02/28", 900, 500);

  console.log(visit1.toString());
  console.log(visit2.toString());
};
main();
