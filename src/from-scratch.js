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


const myMap = (array, cbf) => {
  //guard clause! wooooo!
  if (typeof cbf !== 'function') {
    throw new Error(`First param must be a function but received ${typeof callback}`)
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

const myFind = (array, cbf) => {
  //guard clause
  // if (cbf(array[i]) !== true) {
  //   return
  // }

  let brandNewArray = [];
  for (i = 0; i < array.length; i++) {
      if (cbf(array[i]) == true  ) { //returning true because the callback function was able to return something
        brandNewArray += array[i] //if the cbf returns something, the indexed element in the argument array gets pushed into a new array
      } 
    }
    return brandNewArray //thus, we return a brand new array or nothing at all (undefined)
  }

const moreNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
const nameFinderB = (yup) => { return yup.includes('B')}

console.log(myFind(moreNames, nameFinderB))


const myFilter = () => {
};

const sortWords = () => {
};

const sortNumbers = () => {
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
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
