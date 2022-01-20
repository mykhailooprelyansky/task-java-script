// /***/ Task number 1
// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// /***/ Task number 2
// const total = 100;
// const ordered = prompt("Введите количество товара");

// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно товаров!");
// }

// /***/ Task number 3
// const password = prompt("Введите пароль");
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// if (password === null) {
//   alert((message = "Отменено пользователем!"));
// } else if (password === ADMIN_PASSWORD) {
//   alert((message = "Добро пожаловать!"));
// } else {
//   alert((message = "Доступ запрещен, неверный пароль!"));
// }

// /***/ Task number 4
// const credits = 23580;
// const pricePerDroid = 3000;
// const number = prompt("Сколько дроидов вы хотите купить?");
// let totalPrice;

// if (number === null) {
//   console.log("Отменено пользователем!");
// } else {
//   totalPrice = number * pricePerDroid;
//   console.log(`Общая цена ${totalPrice} кредитов`);
// }

// if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   console.log(
//     `Вы купили ${number} дроидов, на счету осталось ${
//       credits - totalPrice
//     } кредитов.`
//   );
// }

// /***/ Task number 5
// const country = prompt("Введите страну куда нужно доставить товар");
// const normCountry = country.toLowerCase();
// let costDeliver;
// switch (normCountry) {
//   case "china":
//     costDeliver = 100;
//     alert(`Доставка в Китай будет стоить ${costDeliver} кредитов`);
//     break;
//   case "chile":
//     costDeliver = 250;
//     alert(`Доставка в Чили будет стоить ${costDeliver} кредитов`);
//     break;
//   case "australia":
//     costDeliver = 170;
//     alert(`Доставка в Австралия будет стоить ${costDeliver} кредитов`);
//     break;
//   case "india":
//     costDeliver = 80;
//     alert(`Доставка в Индия будет стоить ${costDeliver} кредитов`);
//     break;
//   case "jamaica":
//     costDeliver = 120;
//     alert(`Доставка в Ямайка будет стоить ${costDeliver} кредитов`);
//     break;
//   default:
//     alert("В вашей стране доставка не доступна");
// }

// /***/ Task number 6

// let input = prompt("Введите число");
// let total = 0;

// for (input = 0; input; input + total) {}
// input = prompt("Введите число");

// while (input) {
//   totalAll = total + input;
// }
// alert(`Общая сумма чисел равна ${totalAll}`);

// do {
//   total = prompt("Введите число");
// } while (total !== null);

// console.log(total);

let input;
let number = 0;

for (let i = 0; i < 10; i++) {
  input = prompt("Введите число");
  console.log(isNaN(input));
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз !!!");
    break;
  }
  if (input === null) {
    alert(`Общая сумма чисел равна ${number}`);
    break;
  }
  number = number + +input;
}

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15
