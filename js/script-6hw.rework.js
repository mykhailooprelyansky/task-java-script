import users from "./users.js";
// const getUserNames = (arrays) => arrays.map(({ name }) => name);
// console.log(getUserNames(users));

// task 2
// const getUsersWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color).map(({ name }) => name);
// console.log(getUsersWithEyeColor(users, "blue"));

// task 3
// const getUsersWithGender = (users, ginder) =>
//   users.filter(({ gender }) => gender === ginder).map(({ name }) => name);
// console.log(getUsersWithGender(users, "male"));

// task 4
// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false);
// console.log(getInactiveUsers(users));

// task 5
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// task 6
// const getUsersWithAge = (users, min, max) =>
//   users.filter((user) => min <= user.age && user.age <= max);
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// task 7
// const calculateTotalBalance = (users) =>
//   users.reduce((totalBalace, user) => totalBalace + user.balance, 0);
// console.log(calculateTotalBalance(users));

// task 8
// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);
// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// task 9
// const getNamesSortedByFriendsCount = (users) =>
//   users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// console.log(getNamesSortedByFriendsCount(users));

// task 10
// const getSortedUniqueSkills = (users) =>
//   users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .reduce((uniqueSkill, skill) => {
//       return uniqueSkill.includes(skill)
//         ? uniqueSkill
//         : [...uniqueSkill, skill];
//     }, [])
//     .sort();
// console.log(getSortedUniqueSkills(users));
