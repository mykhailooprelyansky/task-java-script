// Task 1
// const Account = function ({ login, email }) {
//   (this.login = login), (this.email = email);
// };
// Account.prototype.getInfo = function () {
//   console.log(this);
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// console.log(Account.prototype.getInfo);

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo();

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo();

// Task 2
// class User {
//   constructor({ name, age, followers }) {
//     (this.name = name), (this.age = age), (this.followers = followers);
//   }

//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }
// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo();

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo();

// Task 3

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     return this.items.push(item);
//   }
//   removeItem(item) {
//     return this.items.splice(this.items.indexOf(item), 1);
//   }
// }
// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("Дроид");
// console.table(storage.items);

// storage.removeItem("Пролонгер");
// console.table(storage.items);

// Task 4
// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }
//   // set value(str) {
//   //   this._value = str;
//   // }
//   append(str) {
//     return (this._value += str);
//   }
//   prepend(str) {
//     return (this._value = str + this._value);
//   }
//   pad(str) {
//     return (this._value = str + this._value + str);
//   }
// }
// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// Task 5
// class Car {
//   static getSpecs(car) {
//     console.log(car);
//   }
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     (this.speed = speed),
//       (this._price = price),
//       (this.maxSpeed = maxSpeed),
//       (this.isOn = isOn),
//       (this.distance = distance);
//   }

//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     const speedResult = this.speed + value;
//     if (speedResult <= this.maxSpeed) {
//       this.speed += speedResult;
//     }
//   }

//   decelerate(value) {
//     const speedResult = this.speed - value;
//     if (speedResult > 0) {
//       this.speed -= value;
//     }
//   }

//   drive(hours) {
//     if (this.isOn === true) {
//       this.distance += hours * this.speed;
//     }
//     return this.distance;
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
