import users from "./users.js";

// // Task number 1

// const getUserNames = (array) => array.map(({ name }) => name);
// console.log(getUserNames(users));

// Task number 2

// const getUserWithEyeColor = (users, color) =>
//   users.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUserWithEyeColor(users, "blue"));

// Task number 3

// const getUsersWithGender = (users, maleFemale) =>
//   users.filter(({ gender }) => gender === maleFemale).map(({ name }) => name);
// console.log(getUsersWithGender(users, "male"));

// Task number 4

// const getInactiveUsers = (users) => users.filter(({ isActive }) => isActive);

// console.log(getInactiveUsers(users));

// Task number 5
// const getUserWithEmail = (users, mail) =>
//   users.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// Task number 6
// const getUsersWithAge = (users, min, max) =>
//   users.filter(({ age }) => age >= min && age <= max);
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// Task number 7
// const calculateTotalBalance = (users) =>
//   users.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users));

// Task number 8
// const getUsersWithFriend = (users, friendName) =>
//   users
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));

// Task number 9
// const getNamesSortedByFriendsCount = (users) =>
//   users
//     .sort(
//       (prevNumberFriends, nextNumberFriends) =>
//         prevNumberFriends.friends.length - nextNumberFriends.friends.length
//     )
//     .map(({ name }) => name);
// console.log(getNamesSortedByFriendsCount(users));

// Task number 10
// const getSortedUniqueSkills = (users) =>
//   users
//     .reduce((allSkills, user) => {
//       allSkills.push(...user.skills);
//       return allSkills;
//     }, [])
//     .reduce((unique, item) => {
//       return unique.includes(item) ? unique : [...unique, item];
//     }, [])
//     .sort();

// console.log(getSortedUniqueSkills(users));
// return [allSkills.push(...user.skills)].includes(skills)
//   ? allSkills
//   : [...allSkills, skills];
