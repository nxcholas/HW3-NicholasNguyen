function getFactor () {
  let userinput = Number(prompt(`Enter a factor:`));
  return userinput;
}

function getRange () {
  let userinput = Number(prompt(`Enter the maximum value you'd like to multiply to:`));
  return userinput;
}

function calculate () {
  let factor = getFactor();
  let maxVal = getRange();
  let counter = 0;

  while (counter <= maxVal) {
    console.log(`${factor} x ${counter} = ${factor * counter}`);
    counter++;
  }
}

calculate();