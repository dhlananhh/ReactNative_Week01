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
console.log('11. Calculate the average of the numbers in an array of numbers');
function averageArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5])); // Kết quả: 3


// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
console.log('12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers');
function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(getPositiveNumbers([-1, 2, -3, 4, -5, 6])); // Kết quả: [2, 4, 6]


// 13. Find the maximum number in an array of numbers 
console.log('13. Find the maximum number in an array of numbers');
function findMaxNumber(arr) {
    return Math.max(...arr);
}
console.log(findMaxNumber([1, 5, 3, 9, 2])); // Kết quả: 9


// 14. Print the first 10 Fibonacci numbers without recursion 
console.log('14. Print the first 10 Fibonacci numbers without recursion');
function printFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    console.log(fib.join(', '));
}
printFibonacci(10); // Kết quả: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// 15. Create a function that will find the nth Fibonacci number using recursion 
console.log('15. Create a function that will find the nth Fibonacci number using recursion');
function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(7)); // Kết quả: 13


// 16. Create a function that will return a Boolean specifying if a number is prime 
console.log('16. Create a function that will return a Boolean specifying if a number is prime');
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(17)); // Kết quả: true
console.log(isPrime(15)); // Kết quả: false


// 17. Calculate the sum of digits of a positive integer number 
console.log('17. Calculate the sum of digits of a positive integer number');
function sumOfDigits(num) {
    return String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumOfDigits(12345)); // Kết quả: 15


// 18. Print the first 100 prime numbers 
console.log('18. Print the first 100 prime numbers');
function printFirstNPrimes(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
        if (isPrime(num)) {
            console.log(num);
            count++;
        }
        num++;
    }
}
printFirstNPrimes(100);


// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position 
console.log('19. Create a function that will return in an array the first “p” prime numbers greater than “n”');
function findPrimesGreaterThanN(n, p) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}
console.log(findPrimesGreaterThanN(10, 5)); // Kết quả: [11, 13, 17, 19, 23]


// 20. Rotate an array to the left 1 position 
console.log('20. Rotate an array to the left 1 position');
function rotateLeft(arr) {
    if (arr.length <= 1) return arr;
    return [...arr.slice(1), arr[0]];
}
console.log(rotateLeft([1, 2, 3, 4, 5])); // Kết quả: [2, 3, 4, 5, 1]


// 21. Rotate an array to the right 1 position 
console.log('21. Rotate an array to the right 1 position');
function rotateRight(arr) {
    if (arr.length <= 1) return arr;
    return [arr[arr.length - 1], ...arr.slice(0, -1)];
}
console.log(rotateRight([1, 2, 3, 4, 5])); // Kết quả: [5, 1, 2, 3, 4]


// 22. Reverse an array 
console.log('22. Reverse an array');
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Kết quả: [5, 4, 3, 2, 1]


// 23. Reverse a string 
console.log('23. Reverse a string');
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Kết quả: "olleH"


// 24. Create a function that will merge two arrays and return the result as a new array 
console.log('24. Create a function that will merge two arrays and return the result as a new array');
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Kết quả: [1, 2, 3, 4, 5, 6]


// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
console.log('25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both');
function symmetricDifference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...arr1.filter(x => !set2.has(x)), ...arr2.filter(x => !set1.has(x))];
}
console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // Kết quả: [1, 2, 4, 5]


// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
console.log('26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second');
function difference(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(x => !set2.has(x));
}
console.log(difference([1, 2, 3, 4], [2, 4])); // Kết quả: [1, 3]
