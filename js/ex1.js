function userPrompt () {
  let input = Number(prompt("Enter a number between 1 - 100:"))

  return input
}

function consoleCalculation () {
  let num = userPrompt();
  console.log(`User entered: ${num}`);

  if (num <= 100 && num > 0) {
    console.log(`Thank you! You entered ${num}, a valid number.`)
    updateHTMLTrue(num);
  } else {
    console.log(`Sorry ${num} is not a valid entry.`);
    updateHTMLFalse(num);
  }
}

function updateHTMLTrue (num) {
  let outputContainer = document.getElementById('output-container');
  let outputValue = document.getElementById('output-value');

  outputValue.innerHTML = `Thank you! You entered ${num}, a valid number.`;
}

function updateHTMLFalse (num) {
  let outputContainer = document.getElementById('output-container');
  let outputValue = document.getElementById('output-value');

  outputValue.innerHTML = `Sorry ${num} is not a valid entry.`;
}

consoleCalculation();