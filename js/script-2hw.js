// /***/Task number 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`Номер елемента ${i + 1} - Значение елемента '${array[i]}'`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// /***/ Task number two

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const array = message.split(" ");
//   const totalPrice = array.length * pricePerWord;
//   console.log(`Цена гравировки ${totalPrice}`);
//   return totalPrice;
// };
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// );

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// );

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// );

// /***/  Task number 3
// const findLongestWord = function (string) {
//   const array = string.split(" ");
//   //   console.log(array);
//   let longestWord = array[0];
//   for (let i = 0; i < array.length; i++) {
//     // console.log("array[i]", array[i]);
//     // console.log("longestWord", longestWord);
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));

// /***/ Task number 4
// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + " ...";
//   }
//   if (string.length < 40) {
//     return string;
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// console.log(formatString("Curabitur ligula sapien."));
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );

// /***/ Task number 5

// const checkForSpam = function (message) {
//   const messageArray = message
//     .toLowerCase()
//     .replace(/[\[\]]/g, "")
//     .split(" ");
//   console.log(messageArray);

//   return messageArray.includes("spam") || messageArray.includes("sale");
// };

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now"));
// console.log(checkForSpam("[SPAM] How to earn fast [money]"));

// /***/ Task number 6

// const addNumbers = function () {
//   let input;
//   const numbers = [];
//   let total = 0;
//   for (let i = 0; i < 10; i++) {
//     input = prompt("Введите число");
//     if (isNaN(input)) {
//       alert("Было введено не число, попробуйте еще раз");
//       return;
//     }
//     if (input === null) {
//       alert(`Общая сумма чисел равна ${total}`);
//       return;
//     }
//     if (input === "") {
//       alert("Вы не указали значение");
//       input = prompt("Введите число");
//       return;
//     }
//     numbers.push(input);
//   }
// };
// console.log(addNumbers());

let input;
const numbers = [];
let total = 0;
for (let i = 0; i < 10; i++) {
  input = prompt("Введите число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    break;
  }
  if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  if (input === "") {
    alert("Вы не указали значение");
    input = prompt("Введите число");
    break;
  }
  numbers.push(+input);
}
console.log(numbers);

for (const number of numbers) {
  total += number;
}
console.log(total);
