const number1 = Number.parseInt(prompt('Please enter a number'));
const number2 = Number.parseInt(prompt('Please enter another number'));

if (number1 > number2) {
  console.log(`The number ${number1} is bigger than the ${number2}`);
} else if (number2 > number1) {
  console.log(`The number ${number2} is bigger than the ${number1}`);
} else if (number1 === number2) {
  console.log(`The number ${number1} is equal to the ${number2}`);
} else {
  console.log('numbers are not valid');
} 

const number3 = Number.parseInt(prompt('Please enter a number'));

if (number3 % 2 === 0) {
  console.log(`The number ${number3} is even`);
} else if (number3 % 2 === 1) {
  console.log(`The number ${number3} is odd`);
} else {
  console.log('Enter a valid Number');
} 