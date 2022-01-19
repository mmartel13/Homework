function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(addNumbers(3, 4));
console.log(addNumbers(13, 4));
console.log(addNumbers(9, 6));
console.log(addNumbers(5, 11));

const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
];

//steps:
//1. Traverse (go through the array)
//2. Create a for Loop
//3. Declare a count
//4. Check if value of index is true

function sort(array) {
  let counter = 0;
  for (let i = 0; i < 11; i++) {  //could also use i < array.length
    if (array[i] === true) {  //could also put if(array[i]) - can only do it this way if you're searching for a boolean in an array of booleans
      counter++;  //counter++
    }
  }
  return counter;
}
sort(testArray); //don't need this line of code, below will run same thing
console.log(sort(testArray));

let snacks = ["chips", "candy", "dip"];

function pickSnack() {
  console.log(snacks[0]);
}
pickSnack();

const car = {
  make: "mini cooper",
  model: "convertible",
  color: "grey",
  speed: "automatic",
};

console.log(car.make);
console.log(car.model);
