const kelvin = prompt('What is the Kelvin temperature today?'); // constant Kelvin value that does not change
const celsius = kelvin - 273; // Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius * (9/5) + 32; // equation to calculate Fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`) // logs the temperature in Fahrenheit