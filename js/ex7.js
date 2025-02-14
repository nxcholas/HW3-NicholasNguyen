function getTimeInput() {
  let hours = parseInt(prompt("Enter hours (0-23):"), 10);
  let minutes = parseInt(prompt("Enter minutes (0-59):"), 10);
  let seconds = parseInt(prompt("Enter seconds (0-59):"), 10);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    isNaN(seconds) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59 ||
    seconds < 0 ||
    seconds > 59
  ) {
    console.log("Invalid input. Please enter valid time values.");
    return;
  }

  console.log(`Time input: ${hours}h${minutes}m${seconds}s`);

  // Calculate next second
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
  }

  console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
}

getTimeInput();
