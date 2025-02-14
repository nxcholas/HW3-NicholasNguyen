function userNamePrompt() {
  let userName = String(prompt("Enter your name:"));
  return userName;
}

function userUnitsPrompt() {
  let userUnits = Number(prompt("Enter the number of units completed:"));

  return userUnits;
}

function calculation() {
  let userName = userNamePrompt();
  let userUnits = userUnitsPrompt();
  let outputValue = document.getElementById("output-value");

  switch (true) {
    case (userUnits >= 0 && userUnits <= 30):
      console.log(`Hello ${userName}`);
      console.log(`Your grade standing is Freshman`);
      outputValue.innerHTML = `Hello ${userName}! Your grade standing is Freshman`;
      break;
    
    case (userUnits >= 31 && userUnits <= 60):
      console.log(`Hello ${userName}`);
      console.log(`Your grade standing is Sophmore`);
      outputValue.innerHTML = `Hello ${userName}! Your grade standing is Sophmore`;
      break;

    case (userUnits >= 61 && userUnits <= 90):
      console.log(`Hello ${userName}`);
      console.log(`Your grade standing is Junior`);
      outputValue.innerHTML = `Hello ${userName}! Your grade standing is Junior`;
      break;

    case (userUnits >= 91):
      console.log(`Hello ${userName}`);
      console.log(`Your grade standing is Senior`);
      outputValue.innerHTML = `Hello ${userName}! Your grade standing is Senior`;
      break;
  }
}

calculation();
