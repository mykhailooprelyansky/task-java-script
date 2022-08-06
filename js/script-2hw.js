// Task 1
// const logItems = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(`${[i + 1]} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Task 2
// const calculateEngravingPrice = (message, pricePerWord) => {
//   const array = message.split(" ");
//   return array.length * pricePerWord;
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

// Task 3
// const findLongestWord = (string) => {
//   const array = string.split(" ");
//   let longestWord = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll"));

// console.log(findLongestWord("May the force be with you"));

// Task 4
// const formatString = (string) => {
//   if (string.length < 40) {
//     return string;
//   }
//   return `${string}..`;
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// console.log(formatString("Curabitur ligula sapien."));
// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );

// Task 5
// const checkForSpam = (message) => {
//   const array = message
//     .toLowerCase()
//     .replace(/[\[\]]/g, "")
//     .split(" ");

//   return array.includes("spam") || array.includes("sale");
//   //   if (array.includes("spam")) {
//   //     return true;
//   //   }
//   //   if (array.includes("sale")) {
//   //     return true;
//   //   }
//   //   return false;
// };
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// Task 6

// let input;
// const numbers = [];
// let total = 0;
// const totalNumb = () => {
//   for (let i = 0; i < 10; i++) {
//     input = prompt("Введите число!");
//     if (isNaN(input)) {
//       alert("Было введено не число, попробуйте еще раз");
//       return;
//     }
//     if (input === null) {
//       for (const number of numbers) {
//         total += +number;
//       }
//       return console.log(`Общая сумма чисел равна ${total}`);
//     }
//     if (input === "") {
//       alert("Вы ничего не указали");
//       return;
//     }
//     numbers.push(input);
//   }
// };
// totalNumb();

// or //

// let input;
// const numbers = [];
// let total = 0;
// for (let i = 0; i < 10; i++) {
//   input = prompt("Введите число");
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     break;
//   }
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
//   if (input === "") {
//     alert("Вы не указали значение");
//     input = prompt("Введите число");
//     break;
//   }
//   numbers.push(+input);
// }
// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// Task 7

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const addLogin = (allLogins, login) => {
  const isLoginValid = (login) => {
    if (4 > login.length || 16 < login.length) {
      return "Ошибка! Логин должен быть от 4 до 16 символов";
    }
    const isLoginUnique = (allLogins, login) => {
      for (const oneLogin of allLogins) {
        if (oneLogin === login) {
          return "Такой логин уже используется!";
        }
      }
      logins.push(login);
      console.log(logins);
      return "Логин успешно добавлен!";
    };
    return isLoginUnique(allLogins, login);
  };
  return isLoginValid(login);
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
