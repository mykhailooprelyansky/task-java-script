// Task 1
// const name = "Генератор защитного поля";
// let price = 1000;

// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Task 2
// const total = 100;
// const ordered = 80;
// const message =
//   ordered > total
//     ? console.log("На складе недостаточно товаров!")
//     : console.log("Заказ оформлен, с вами свяжется менеджер");

// if (ordered > total) {
//   console.log("На складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// Task 3
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;

// const adminPassword = prompt("Введите пароль");

// switch (adminPassword) {
//   case "jqueryismyjam":
//     message = "Добро пожаловать!";
//     break;

//   case null:
//     message = "Отменено пользователем!";
//     break;

//   default:
//     message = "Доступ запрещен, неверный пароль!";
// }
// console.log(message);

// Task 4

// const credits = 23580;
// const pricePerDroid = 3000;
// const howMachDroid = prompt("Сколько дроидов вы хотите купить?");
// let totalPrice;

// if (howMachDroid === null) {
//   console.log("Отменено пользователем!");
// } else {
//   totalPrice = howMachDroid * 3000;
//   console.log(totalPrice);
// }

// if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else if (howMachDroid === null) {
//   console.log("Вы отменили покупку");
// } else {
//   console.log(
//     `Вы купили ${howMachDroid} дроидов, на счету осталось ${
//       credits - totalPrice
//     } кредитов.`
//   );
// }

// Task 5
// let cost;
// const country = prompt("Введите страну").toLowerCase();

// switch (country) {
//   case "китай":
//     cost = 100;
//     break;
//   case "чили":
//     cost = 250;
//     break;
//   case "австралия":
//     cost = 170;
//     break;
//   case "индия":
//     cost = 80;
//     break;
//   case "ямайка":
//     cost = 120;
//     break;
//   default:
//     alert("В вашей стране доставка не доступна");
// }
// alert(`Доставка в ${country} будет стоить ${cost} кредитов`);

// Task 6

let numb;
let total = 0;

for (let i = 0; i < 10; i++) {
  numb = prompt("Введите число!");
  if (isNaN(numb)) {
    alert("Было введено не число, попробуйте еще раз");
    break;
  }
  if (numb === null) {
    alert(`Общая сума ровна ${total}`);
    break;
  }
  total += +numb;
}

console.log(total);
