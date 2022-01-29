// Task number 1
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";

// user.hobby = "skydiving";

// user.premium = false;
// console.log(user);
// const entries = Object.entries(user);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// Task number 2

// const countProps = function (obj) {
//   const count = Object.keys(obj).length;
//   return count;
// };

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Task number 3

// const findBestEmployee = function (employees) {
//   const bestEmployee = Object.values(employees);
//   const entries = Object.entries(employees);
//   for (const entry of entries) {
//     if (entry[1] === Math.max(...bestEmployee)) {
//       return entry[0];
//     }
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

// Task number 4
// const countTotalSalary = function (employees) {
//   let totalSalary = 0;
//   for (const salary of Object.values(employees)) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };

// console.log(countTotalSalary({}));

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// );

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// );

// Task number 5
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const obj of arr) {
//     const array = Object.keys(obj);
//     if (array.includes(prop)) {
//       values.push(obj[prop]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "quantity"));
// console.log(getAllPropValues(products, "category"));

// Task number 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   let totalPrice;
//   for (const product of allProducts) {
//     const productArray = Object.values(product);
//     if (productArray.includes(productName)) {
//       totalPrice = productArray[1] * productArray[2];
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, "Радар"));
// console.log(calculateTotalPrice(products, "Дроид"));

// Task number 7

const Transaction = { DEPOSIT: "deposit", WITHDRAW: "withdraw" };

const account = {
  balance: 0,
  transaction: [],
  createTransaction(amount, type, id) {
    return { amount, type, id };
  },
  deposit(amount, id) {
    this.balance += amount;

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT, id);
    this.transaction.push(transaction);
  },
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    if (amount > this.balance) {
      console.log("Cнятие такой суммы не возможно, недостаточно средств");
    } else {
      this.transaction.push(transaction);
      this.balance -= amount;
    }
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (const obj of this.transaction) {
      if (obj.id === id) {
        return obj;
      }
    }
  },
  getTransactionTotal(type) {
    let total = 0;
    for (const obj of this.transaction) {
      if (obj.type === type) {
        total += obj.amount;
      }
    }
    // for (let i = 0; i < this.transaction.length; ++i) {
    //   console.log(this.transaction[i]);
    //   if (this.transaction[i].type === type) {
    //     total += this.transaction[i].amount;
    //   }
    // }
    return total;
  },
};

account.deposit(600, 123);
account.deposit(568, 456);
account.deposit(235, 254);
account.withdraw(400);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(254));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.table(account);
