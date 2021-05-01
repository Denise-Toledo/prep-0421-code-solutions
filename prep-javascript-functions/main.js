function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}
var greeting = getGreeting('World!');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}
var multiply = addAndMultiplyBy5(10, 5);
console.log('multiplyBy5', multiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var divide = multiplyAndDivideBy5(35, 10);
console.log('divideBy5', divide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumers', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * 5;
}
var circle = getCircleCircumference(5);
console.log('circleCircumference', circle);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var FullName = getFullName('Denise ', 'Toledo');
console.log('Name:', FullName);

function cube(number) {
  var result = (number) * (number) * 5;
  return result;
}
var Cube = cube(5);
console.log('Cube', Cube);
