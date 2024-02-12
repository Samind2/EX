class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
  toString() {
    return `Author [name = ${this.name}, email = ${this.email}, gender = ${this.gender}]`;
  }
}

class Book {
  constructor(name, authors, price, qty = 0) {
    this.name = name;
    this.authors = authors;
    this.price = price;
    this.qty = qty;
  }
  //constructor(name, authors, price) {
  //  this.name = name;
  //  this.authors = authors;
  //this.price = price;
  //  }

  getName() {
    return this.name;
  }

  getAuthors() {
    return this.authors;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getQty() {
    return this.qty;
  }

  setQty(qty) {
    this.qty = qty;
  }

  toString() {
    let authorNames = "";
    for (let i = 0; i < this.authors.length; i++) {
      authorNames += this.authors[i].toString();
      if (i < this.authors.length - 1) {
        authorNames += ", ";
      }
    }
    return `Book [name = ${this.name}, authors = {${authorNames}}, price = ${this.price}, qty = ${this.qty}]`;
  }

  getAuthorNames() {
    let authorNames = "";
    for (let i = 0; i < this.authors.length; i++) {
      authorNames += this.authors[i].getName();
      if (i < this.authors.length - 1) {
        authorNames += ", ";
      }
    }
    return authorNames;
  }
}

const main = () => {
  const author1 = new Author("Mind", "Mmza@gmail.com", "F");
  const author2 = new Author("AJ", "AJ@gmail.com", "F");
  console.log(author1.toString());
  console.log(author2.toString());

  const book1 = new Book("กระต่ายกับเต่า", [author1, author2], 299, 10);
  console.log(book1.toString());
  console.log(book1.getAuthorNames());
};

main();
