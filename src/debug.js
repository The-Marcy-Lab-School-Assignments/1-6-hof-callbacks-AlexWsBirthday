const myEvery = (arr, callback) => {
  for (const values of arr) {
    if (callback(values) == false) { //i made it so the condition was asking for a falsy value (not exclusively false, otherwise it'd be ===) and to return false if the condition is met.
      return false
    };
  }
  return true;
};



const sortUsersBy = (users, sortingFunction) => {
  //You can't spread an object array into a new array apparently. 
  //So you still have to use the .slice() method to create a copy of the array,
  //then sort the copy of the array using the sorting function by pasting the argument 
  //"sortingFunction" to pass part of a higher order function (the specified compare method)
  return users.slice().sort(sortingFunction);
};

// const users = [
//   { name: 'Alice', height: 22 },
//   { name: 'Bob', height: 32 },
//   { name: 'Charlie', height: 28 },
//   { name: 'Diana', height: 40 },
// ];

// const usersSortedByAge = sortUsersBy(users, (a, b) => b.height - a.height);

// console.log(JSON.stringify(usersSortedByAge))




/*
   Alex's Version of the function that currently fails the test. You almost had it!!!
*/
const logEachName2 = (names) => {
  return names.forEach((name, index) => console.log(`'${name}', ${index}, `) + console.log(names));
};

/*
Madhur Feedback - the .forEach() method can accept an element, it's index, and the whole array 
                  as parameters in the following order: (element, index, array).
                  In this case, we give each element the variable "name", each index is given the variable "index", 
                  and the array as a whole is given the variable "array". We can simply just console.log each :]
*/
const logEachName = (names) => {
  return names.forEach((name, index, array) => console.log(name, index, array));
};

// const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
// logEachName(names);


const logEachUserBio = (users) => {
  return users.forEach((user) => console.log(user.bio));
};

const users = [
  { name: 'Alice', bio: 'Alice is a software engineer' },
  { name: 'Bob', bio: 'Bob is a teacher' },
  { name: 'Charlie', bio: 'Charlie is a student' },
  { name: 'Diana', bio: 'Diana is a doctor' },
];
console.log(logEachUserBio(users))

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
