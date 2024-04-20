//console.log('1. --------------------------------------------------------------------------------------------------')
const myForEach = (array, cbfunc) => {
  let newArray = []; //to not mutate the array fed in as an argument, creating a new empty "box" to feed the altered results into
  for (i = 0; i < array.length; i++) { //going through each index of the array fed into the HOF
    newArray += cbfunc(array[i]) // taking our empty box, and for each iteration, calling the CBF on the single index of the argument array, and then adding that altered index into the box.
  } //no return, as it wasn't called for. Why?
};

//test

// const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const greeting = (name) => console.log(`Hoi ${name}, how are u?`)
// console.log(myForEach(myNames, greeting))
// console.log(myNames)

//console.log('2. --------------------------------------------------------------------------------------------------')
const myMap = (array, cbf) => {
  //guard clause! wooooo!
  if (typeof cbf !== 'function') {
    throw new Error(`Second param must be a function but received ${typeof callback}`)
  }

  let newMap = []; //setting up new box to not alter the original elements in the argument array 
  for (let i = 0; i < array.length; i++) { // looping through the arg array using conditions which limit us to only fetch as many indexed elements as there are given
    let newElement = cbf(array[i]) //creating "new element" which would be a modified version of the given element from the arg array
    newMap.push(newElement) //completely forgot that there was a push method. We didn't have to push the elements in myForEach into the same array, because it was producing a different altered array *for each index listed*
    } //anyway push the INDIVIDUAL altered element into the new box we made so it all shows up in the box
    return newMap //when the code above is done running, this will return the new array we made with all of our new fun toys :]
  }
 

//test
  
// const moreNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
// const length = (yup) => { return yup.length}
// console.log(myMap(moreNames, length))

//console.log('3. --------------------------------------------------------------------------------------------------')
const myFind = (array, cbf) => {

  for (i = 0; i < array.length; i++) {
     if (cbf(array[i]) == true  ) { //returning true because the callback function was able to return something
        return array[i] //thus, we return a brand new array or nothing at all (undefined). We also immediately return it after the first instance of a truthy value pops up and is passed into the new box we made. 
     }
    }
    return undefined; //make sure undefined is outside the loop, incase the loop fully iterates through the array and finds nothing 
  };

// const moreNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Alex'];
// const nameFinderA = (yup) => { return yup.includes('A')}

// console.log(myFind(moreNames, nameFinderA))
// console.log(moreNames)

// const nums = [1, 2, 3]
// const firstEvenNum = myFind(nums, (num) => num % 2 === 0);

// console.log(typeof firstEvenNum)
// console.log(firstEvenNum)

//console.log('4. --------------------------------------------------------------------------------------------------')
const myFilter = (array, filter) => {
  let newArray2 = []; //creating that new box
  for (i = 0; i < array.length; i++) { //iterate through the array
    if (filter(array[i]) == true  ) { //checking if calling the cbf on the array returns anything (making it truthy)
      newArray2.push(array[i]) //if it does return truthy, push the element that passes "true" into the new box
    } else {
      continue //if the element doesn't return "true", continue on to the next element in the array
    }
  }
  return newArray2 //I accidentally had the return statement inside of the for loop, which cut the loop early after the first "finding."
};

// const moreNames = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Bill', 'Amanda', 'Zephir', 'Benris'];
// const nameFinderB = (yup) => { return yup.includes('B')}
// console.log(myFilter(moreNames, nameFinderB))


//console.log('5. --------------------------------------------------------------------------------------------------')
const sortWords = (array) => {
  let sortedArray = [...array]; //SPRED THAT BRED!!! making a copy of the array, since the array is full of primitive data types, is possible. This makes it so that sort() doesn't mutate the original array.
  return sortedArray.sort(); //sorting the copy of the array that we made using .sort()
};

console.log(sortWords(["big", "mode", "Apple"]))

//console.log('6. --------------------------------------------------------------------------------------------------')
const sortNumbers = (array) => {
  let sortedArray2 = [...array]; //SPRED THAT BRED!!! making a copy of the array, since the array is full of primitive data types, is possible. This makes it so that sort() doesn't mutate the original array.
  return sortedArray2.sort((a, b) => a - b);
};


//console.log('7. --------------------------------------------------------------------------------------------------')
const sortNumbersBetter = (array, isDescending) => {

  //guard clause
  if (!array) {
    throw new Error("Please enter an array, paired with a boolean.")
  }

  //conditional statement, if the parameters meet that condition 
 if (isDescending === true) {
    let sortedArray2 = [...array]; //SPRED THAT BRED!!! making a copy of the array, since the array is full of primitive data types, is possible. This makes it so that sort() doesn't mutate the original array.
  return sortedArray2.sort((a, b) => b - a);
  }


//default statement or default route, if the parameters don't meet that condition 
  let sortedArray2 = [...array]; //SPRED THAT BRED!!! making a copy of the array, since the array is full of primitive data types, is possible. This makes it so that sort() doesn't mutate the original array.
  return sortedArray2.sort((a, b) => a - b);
};


//console.log('8. --------------------------------------------------------------------------------------------------')
const sortUsersByOrder = (listOfUsernames) => {
  /*
  1. let usersMapped - creating a variable which will hold the end result (a copy of the inserted array, sorted by order)
  
  2. listOfUsernames.slice() - copying the array passed as an argument into the function, using the .slice() method to bring back a shallow copy. Honestly I don't know how this doesn't count as a separate array from the original.
 
  3. .slice().sort() - you can layer methods as long as you put them in the right order. I'm taking the full slice (shallow copy) of the arg array and passing it through the sort method.
  
  4. .sort((a, b) => (a.order - b.order)) - I'm customizing the compare function built inside of the sort method, by using an arrow function to ask it to
  not stringify 
  */
  let usersMapped = listOfUsernames.slice().sort((a, b) => (a.order - b.order)) 
 return usersMapped
}
  


const users = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];
console.log(sortUsersByOrder(users))

//console.log('9. --------------------------------------------------------------------------------------------------')
const sortUsersByName = (listOfUsernames) => {
  let usersMappedByName = listOfUsernames.slice().sort((a, b) => (a.name - b.name)) //
  return usersMappedByName
};


module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
