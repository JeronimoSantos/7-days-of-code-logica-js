/* Your task today is to rewrite the code below so that it prints the 
information correctly, makes sense, and is error-free: */

// Input Values
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

// Processing Stage
if (numeroUm === stringUm) {
  console.log(`As variáveis ${numeroUm} e ${stringUm} tem o mesmo valor, mas tipos diferentes`); // Data Output
} else {
  console.log(`As variáveis ${numeroUm} e ${stringUm} não tem o mesmo valor`);
};

if (numeroTrinta === stringTrinta) {
  console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} tem o mesmo valor e mesmo tipo`);
} else {
  console.log(`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo tipo`);
};

if (numeroDez === stringDez) {
  console.log(`As variáveis ${numeroDez} e ${stringDez} tem o mesmo valor, mas tipos diferentes`);
} else {
  console.log(`As variáveis ${numeroDez} e ${stringDez} não tem o mesmo valor`);
};

// Solution to the Challenge: Using the triple equality operator.
// Compare the values ​​on both sides of the equation, and also check if they are of the same type.
