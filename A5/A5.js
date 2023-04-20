//A
let lucasHeight = 1.69;
let lucasMass = 78

let peterHeight = 1.95;
let peterMass = 92

const lucasBMI = lucasMass / (lucasHeight * lucasHeight);
const peterBMI = peterMass / (peterHeight * peterHeight);

let lucasHigherBMI = peterBMI > lucasBMI;

console.log(`The BMI of Peter is ${peterBMI}, The BMI of Lucas is ${lucasBMI}, Peter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`);

//B Temperature Converter

let celTemp = 32;
let farTemp = (9 / 5) * celTemp + 32;
console.log(`${celTemp} C is ${farTemp} F`)

let farT = 89.6;
let celT = (farT - 32) * (5 / 9);
console.log(`${farT} F is ${celT} C`)


// C.
// Improve the code you wrote for the BMI example from part A:
// Print a nice output to the console, saying who has the higher BMI using template literals
// Outputs Example: "Lucas' BMI (28.3) is higher than Peter’s (23.9)!"
// HINT: Use an if/else statement or conditional operator
// D.
// Create 2 functions (Arrow Function Preferred) to convert temperature:
// One function is called CovertCelsiusToFahrenheit. When calling the function, pass a Celsius temperature value
// (argument) to the function, the function can convert it to Fahrenheit temperature and log a message to.
// Eg: "NN°C is NN°F".
// TEST DATA: 100°C 0°C 10°C
const CovertCelsiusToFahrenheit = celsius => console.log(`${celsius} C is ${celsius * (9 / 5) + 32} F`);
CovertCelsiusToFahrenheit(celT);

// The other function is called CovertFahrenheitToCelsius. It can convert Fahrenheit to Celsius and log "NN°F is
// NN°C." to Console.
// TEST DATA: 32°F 10°F 102°F
const CovertFahrenheitToCelsius = far => console.log(`${far} F is ${(far-32) * (5/9)} C`);
CovertFahrenheitToCelsius(farT);
