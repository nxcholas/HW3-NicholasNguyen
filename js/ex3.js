function followingDay() {
  let dayName = String(prompt("Enter day:"));
  let outputValue = document.getElementById("output-value");
  outputValue.style.color = "black";
  switch (dayName) {
    case "mon":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Tuesday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Tuesday`;
      break;
    case "tues":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Wednesday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Wednesday`;
      break;
    case "wed":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Thursday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Thursday`;
      break;

    case "thu":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Friday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Friday`;
      break;

    case "fri":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Saturday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Saturday`;
      break;

    case "sat":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Sunday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Sunday`;
      break;

    case "sun":
      console.log(`You entered: ${dayName}`);
      console.log("Following day: Monday");
      outputValue.innerHTML = `You entered: ${dayName} Following day: Monday`;
      break;

    default:
      console.log("Error: Invalid Input [mon, tues, wed, thu, fri, sat, sun]");
      outputValue.innerHTML =
        "Error: Invalid Input [mon, tues, wed, thu, fri, sat, sun]";
      outputValue.style.color = "red";
  }
}

followingDay();
