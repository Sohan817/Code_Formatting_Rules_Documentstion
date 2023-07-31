/**
 * name of the user
 * @type{string}
 */
let user = "Shohan Hossain";

/**
 * Name of the Users
 * @type{Array<String>}
 */
let users = ["Sohan", "Nadim", "Shorna"];

/**
 * User 1
 * @type{{name : string,age :number}}
 */
let user1 = {
  name: "Sohan",
  age: 27,
};
/**
 * Area of Nothing
 * @returns no important value
 */

function areaOfNothing() {
  return "Area of Nothing";
}

/**
 * Calculate Area of Rectangle
 * @param {number} x The length of the Rectangle
 * @param {number} y The width of the Rectangle
 * @returns {number} Area of rectangle
 */
function areaOfRectangle(x, y) {
  return x * y;
}

/**
 * Calculate Area of Triangle
 * @param {number} x The base of the Triangle
 * @param {number} y The height of the Triangle
 * @returns {number} Area of Triangle
 */
function areaOfTriangle(x, y) {
  return x * y * 0.5;
}

/**
 * Calculate Area of Cricle
 * @param {number} x The radious of the Cricle
 * @returns {number} Area of Cricle
 */
function areaOfCircle(x) {
  return Math.PI * x * x;
}

areaOfRectangle(10, 20);
areaOfTriangle(10, 20);
