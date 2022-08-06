// Task 1
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(user);

// Task 2
// const countProps = (obj) => {
//   return Object.values(obj).length;
// };
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Task 3
// const findBestEmployee = (employees) => {
//   const valueEmployees = Object.values(employees);
//   const bestEmployees = Object.entries(employees);
//   for (const employ of bestEmployees) {
//     if (employ[1] === Math.max(...valueEmployees)) {
//       return `${employ[0]}:${employ[1]}`;
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

// Task 4
// const countTotalSalary = (employees) => {
//   let total = 0;
//   const salary = Object.values(employees);
//   for (const employ of salary) {
//     total += employ;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// Task 5
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const array = [];
//   for (const obj of arr) {
//     if (Object.keys(obj).includes(prop)) {
//       array.push(obj[prop]);
//     }
//   }
//   return array;
// };
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

// Task 6
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (const product of allProdcuts) {
//     const productEntries = Object.values(product);
//     if (productEntries.includes(productName)) {
//       return productEntries[1] * productEntries[2];
//     }
//   }
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// Task 7
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type, id) {
    return { amount, type, id };
  },
  deposit(amount, id) {
    this.balance += amount;

    this.transactions.push(this.createTransaction(amount, "deposit", id));
    return this.transactions;
  },

  withdraw(amount, id) {
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, "withdraw", id));
    if (amount > this.balance) {
      return "Cнятие такой суммы не возможно, недостаточно средств";
    }
    return this.transactions;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const object of this.transactions) {
      if (object.id === id) {
        return object;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const object of this.transactions) {
      if (object.type === type) {
        total += object.amount;
      }
    }
    return total;
  },
};

console.log(account.deposit(200, "001"));
console.log(account.withdraw(100, "-001"));
console.log(account.getBalance());
console.log(account.deposit(300, "002"));
console.log(account.getTransactionDetails("002"));
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));
