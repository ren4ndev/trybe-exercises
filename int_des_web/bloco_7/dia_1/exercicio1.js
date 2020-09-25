const fatorial = number => number * (fatorial(number - 1));
console.log(fatorial(6));

//  Gabarito
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))