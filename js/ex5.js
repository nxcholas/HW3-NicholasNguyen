let attempts = 3;

function userInput() {
  let input = String(prompt("Enter the password:"));
  return input;
}

function validate() {
  let password = "secret";

  for (let i = 0; i < 3; i++) {
    let input = userInput();
    if (input === password) {
      console.log(`You entered the correct password after ${i} attempt(s)!`);
      break;
    } else {
      attempts--;
      console.log(`${attempts} attempts remaining.`);
      continue;
    }
  }
  end();
}

function end() {
  if (attempts === 0) {
    console.log(`You ran out of attempts! Refresh to try again.`);
  }
}

validate();
