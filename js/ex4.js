function userPromptOne() {
  let num = Number(prompt("Enter first number:"));
  if (num) {
    console.log(`First number: ${num}`);
    return num;
  } else {
    console.log(`Error: Invalid Input`);
  }
}

function userPromptTwo() {
  let num = Number(prompt("Enter second number:"));
  if (num) {
    console.log(`First number: ${num}`);
    return num;
  } else {
    console.log(`Error: Invalid Input`);
  }
}

function calculate() {
  let num1 = userPromptOne();
  let num2 = userPromptTwo();

  console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`Multipication: ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
  console.log(`Modulo: ${num1} % ${num2} = ${num1 % num2}`);
}

calculate();
