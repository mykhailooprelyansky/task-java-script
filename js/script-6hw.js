import users from "./users.js";

// Task number 1
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));

// Task 2
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, "blue"));

// Task 3
// const getUsersWithGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender).map(({ name }) => name);
// };

// console.log(getUsersWithGender(users, "male"));

// Task 4
// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };

// console.log(getInactiveUsers(users));

// // Task 5
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// Task 6

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age > min && user.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// Task 7
// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));

// Task 8
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter((user) => user.friends.includes(friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Task 9
// const getNamesSortedByFriendsCount = (users) => {
//   const sortByLength = (a, b) => a.friends.length - b.friends.length;
//   return users.sort(sortByLength).map((user) => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));

// Task 10
const getSortedUniqueSkills = (users) =>
  users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((uniqueSkill, skill) => {
      return uniqueSkill.includes(skill)
        ? uniqueSkill
        : [...uniqueSkill, skill];
    }, [])
    .sort();

console.log(getSortedUniqueSkills(users));
