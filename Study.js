/*Inner most loop must finish before outer loop can start again*/
let size = 8;
let board = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log("1. \n", board);

/*Define variable that is a function that takes in only 1 parameter, returns the sum of a number */
const square = function (x) {
  return x * x;
};
console.log("2. \n", square(12));
/*Define variable that is a function which takes in 2 parameters, define variable result that equals 1, make a loop that counts from 0 up to the 2 parameter,
 on each count result will be multiplied by the first parametar and become the new result, when loop is over we return the new result*/
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log("3. \n", power(4, 2));
/*Difference between let and var, let cannot be seen if it is defined within a function unless it is called for within the function,
 while var can be called from outside of the function*/
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log("4. \n", x + y + z);
}
console.log("5. \n", x + z);

/*Here we have a function that takes in a parameter "n" and returns half of the number "n",
 then we have a variable n defined outside of the function that we call "n" but the global n does not refer to the function*/
const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log("6. \n", halve(100));

console.log("7. \n", n);

/*Here we are calling a function within a function, the function we are calling we made inside the parent function before we called it*/
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
    console.log(ingredientAmount + " " + unit + " " + name);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

/*We can write functions after a piece of code that calls the function, functions ignore the top to bottom flow of control*/
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
/*Different way of writing functions*/
const power1 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const square1 = (x) => {
  return x * x;
};
const square2 = (x) => x * x;
//Function that doesn't take in any parameters
const horn = () => {
  console.log("Toot");
};
// Looking at flow of control greet function takes us to line 97 finishes goes back to the greet function and then console.log("Bye") returns and the program ends
/*
not in function
   in greet
        in console.log
   in greet
not in function
   in console.log
not in function
*/
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
/*Here we created a infinite loop , as the computer memory runs out of space it gives us a error "Maximum call stack size exceeded"*/
/* 
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");  
*/

//Here we made the second parameter equal to 2 if no parameter is given
function power2(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power2(4));

console.log(power2(2, 6));

//Recursive function is a function that calls itself
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
console.log(findSolution(18));

//Exercises

//1
function min(x, y) {
  if (x > y) {
    return y;
  } else return x;
}
console.log(min(0, 10));
console.log(min(0, -10));
//2
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(23));
//3
function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBCB"));

function countChar(string, letter) {
  let numberOfLetters = 0;
  for (let count = 0; count < string.length; count++) {
    if (string[count] == letter) {
      numberOfLetters += 1;
    }
  }
  return numberOfLetters;
}

console.log(countChar("kakkerlak", "k"));

//Making objects, adding a new property to the object, adding a new value to a existing property in the object
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
day1.events.push("money");
console.log(day1.events);
console.log(day1);

//Deleting a property from a object with the delete operator and checking for "left" in the object with the in Operator
let anObject = { left: 1, right: 2 };
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);

//Returning the names of the properties within a object
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
//Returns ["x","y","z"]
//Object.assign copies all properties from one object to another
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
//{a:1 , b: 3, c:4}

const score = { visitors: 0, home: 0 };
score.visitors = 1;
console.log(score);

/*let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "television"],
    squirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "brushed teeth",
      "touched tree",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
];*/
let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}
console.log(phi([76, 9, 4, 1]));

var JOURNAL = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  {
    events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
    squirrel: false,
  },
  {
    events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "ice cream",
      "brushed teeth",
      "computer",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: [
      "potatoes",
      "candy",
      "brushed teeth",
      "exercise",
      "weekend",
      "dentist",
    ],
    squirrel: false,
  },
  {
    events: [
      "brussel sprouts",
      "pudding",
      "brushed teeth",
      "running",
      "weekend",
    ],
    squirrel: false,
  },
  {
    events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["bread", "beer", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  {
    events: ["lettuce", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  {
    events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
    squirrel: false,
  },
  {
    events: ["potatoes", "ice cream", "brushed teeth", "work"],
    squirrel: false,
  },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  {
    events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
    squirrel: false,
  },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  {
    events: ["spaghetti", "pudding", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["bread", "brushed teeth", "exercise", "weekend"],
    squirrel: false,
  },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  {
    events: ["spaghetti", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  {
    events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
    squirrel: false,
  },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
    squirrel: false,
  },
  {
    events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "cycling", "weekend"],
    squirrel: false,
  },
  {
    events: [
      "cauliflower",
      "peanuts",
      "brushed teeth",
      "computer",
      "work",
      "touched tree",
    ],
    squirrel: false,
  },
  {
    events: ["lettuce", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["potatoes", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  {
    events: ["carrot", "pudding", "brushed teeth", "weekend"],
    squirrel: false,
  },
  {
    events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  {
    events: ["brussel sprouts", "brushed teeth", "computer", "work"],
    squirrel: false,
  },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  {
    events: ["spaghetti", "candy", "television", "work", "touched tree"],
    squirrel: false,
  },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  {
    events: ["bread", "beer", "computer", "weekend", "touched tree"],
    squirrel: false,
  },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  {
    events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
    squirrel: false,
  },
  {
    events: ["lasagna", "brushed teeth", "television", "work"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "brushed teeth", "running", "work"],
    squirrel: false,
  },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
    squirrel: false,
  },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  {
    events: ["bread", "brushed teeth", "television", "weekend"],
    squirrel: false,
  },
  {
    events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
    squirrel: false,
  },
];

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
console.log(tableFor("pizza", JOURNAL));

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

for (let entry of JOURNAL) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));

function range(start, end, step) {
  let array = [];
  if (step > 0 && step < end) {
    for (i = start; i <= end; i += step) {
      array.push(i);
    }
  }
  if (step < 0) {
    for (i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  if (!step) {
    for (i = start; i <= end; i++) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  let sumOfNumber = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfNumber = sumOfNumber + array[i];
  }
  return sumOfNumber;
}
console.log(range(1, -10, -1));
console.log(sum(range(1, -10, -1)));
