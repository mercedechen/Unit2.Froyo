// Prompt the user to input froyo flavor(s) separated by commas, input is a string
const userInputFlavors = window.prompt("To order, enter froyo flavors separated by commas: ", "vanilla, strawberry");
console.log(userInputFlavors);

// Store user input to a variable
const userFroyoOrder = userInputFlavors;
console.log(userFroyoOrder);

// Convert string to array
const flavorsArray = userFroyoOrder.split(', ');
console.log(flavorsArray);

// Track each amount of flavor in array
function flavorsCount(items) {
  // Object used to keep count of how many orders there are of each flavor?
  const flavors = {};
  for (let i = 0; i < items.length; i++) {
    if (flavors[items[i]]) {
      flavors[items[i]]++;
    } else {
      flavors[items[i]] = 1;
    }
  }
  return flavors;
}
console.log(flavorsCount(flavorsArray));

