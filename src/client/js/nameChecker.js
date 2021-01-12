function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou", "Sultan"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  } else {
    alert("Wrong");
  }
}

export { checkForName };
