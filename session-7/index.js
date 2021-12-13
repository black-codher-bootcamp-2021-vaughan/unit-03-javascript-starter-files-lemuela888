// ****************************************************TASK 1****************************************************

const animals =['cat','dog', 'wolf', 'lion', 'eagle', 'zebra']; 

const cat = animals[0];
const dog = animals[1];
const wolf = animals[2];
const lion = animals[3];
const eagle = animals[4];
const zebra = animals[5];

for (let index = 0; index < animals.length; index++) {
  const animal = animals [index];
  console.log(animal);
}

animals.pop('cat');
console.log(animals);


// ****************************************************TASK 2****************************************************

const names = ['Angel', 'Magic','Judah', 'Carmen', 'Lady', 'Raven', 'Lord', 'Jodye', 'Milan', 'Beau']

const Angel = names[1];
const Magic = names[2];
const Judah = names[3];
const Carmen = names[4];
const Lady = names[5];
const Raven = names[6];
const Lord = names[7];
const Jodye = names[8];
const Milan = names[9];
const Beau = names[10];

names.sort().reverse();

console.log(names);


// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

people.sort(compare)

const noAge = people.map((person) => {return person.name});

console.log(noAge, people);

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? 1 : -1;
}
