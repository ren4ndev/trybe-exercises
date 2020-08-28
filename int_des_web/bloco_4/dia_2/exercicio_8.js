let numbers = [];
let numbersDivided = [];

for (i = 1; i <= 25; i++) {
    numbers.push(i);
}

console.log(numbers);

for (i = 0; i < numbers.length; i++) {
    numbersDivided.push(numbers[i] / 2);
}

console.log(numbersDivided);