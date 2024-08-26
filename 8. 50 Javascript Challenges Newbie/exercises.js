// 1. Print numbers from 1 to 10 
console.log('1. Print numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print the odd numbers less than 100 
console.log('2. Print the odd numbers less than 100');
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}


// 3. Print the multiplication table with 7 
console.log('3. Print the multiplication table with 7');
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}


// 4. Print all the multiplication tables with numbers from 1 to 10 
console.log('4. Print all the multiplication tables with numbers from 1 to 10');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-------------------');
}


// 5. Calculate the sum of numbers from 1 to 10 
console.log('5. Calculate the sum of numbers from 1 to 10');
let sum_1_to_10 = 0;
for (let i = 1; i <= 10; i++) {
    sum_1_to_10 += i;
}
console.log(`Tổng từ 1 đến 10 là: ${sum_1_to_10}`);


// 6. Calculate 10! 
console.log('6. Calculate 10!');
let factorial = 1;
for (let i = 1; i <= 10; i++) {
    factorial *= i;
}
console.log(`10! = ${factorial}`);


// 7. Calculate the sum of even numbers greater than 10 and less than 30 
console.log('7. Calculate the sum of even numbers greater than 10 and less than 30');
let sumEvenNumbers = 0;
for (let i = 12; i < 30; i += 2) {
    sumEvenNumbers += i;
}
console.log(`Tổng các số chẵn từ 12 đến 28 là: ${sumEvenNumbers}`);


// 8. Create a function that will convert from Celsius to Fahrenheit 
console.log('8. Create a function that will convert from Celsius to Fahrenheit');
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(`25°C = ${celsiusToFahrenheit(25)}°F`);


// 9. Create a function that will convert from Fahrenheit to Celsius 
console.log('9. Create a function that will convert from Fahrenheit to Celsius');
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(`77°F = ${fahrenheitToCelsius(77)}°C`);


// 10. Calculate the sum of numbers in an array of numbers 
console.log('10. Calculate the sum of numbers in an array of numbers');
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Kết quả: 15


// 11. Calculate the average of the numbers in an array of numbers 
