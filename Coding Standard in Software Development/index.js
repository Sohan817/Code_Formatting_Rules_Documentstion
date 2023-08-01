// Naming Conventin and Consistency

//camel casing
let fullName = " Shohan Hossain";
//underscore
let full_name = "Sohan Nadim";

//Consistency:We should either use under_score or camelCasing
//Variable or function or object name should be meaning full and indentation

//indentation or spaching between two function
function Display() {
  console.log("hi");
}

function Display() {
  console.log("hi");
}

// use comment and documentation
/**
 * Add two numbers
 * @param {number} x first number
 * @param {number} y second number
 * @returns result of add
 */
function addTwoNumbers(x, y) {
  return x + y;
}
addTwoNumbers(4, 6);

//DRY: Dont repeat yourselves,create function
//Avoid deep Nasting
//Use seperate folder for for same category files
