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

let xD = 1;
