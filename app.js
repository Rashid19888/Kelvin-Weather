//current temperature in kelvin degrees.
const kelvin = 293;
//Converting kelvin to celsius.
const celsius = kelvin - 273;
//Convert celsius to Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//Round down Fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} 
degrees fahrenheit.`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`the temperature is ${newton} 
degrees Newton.`);
