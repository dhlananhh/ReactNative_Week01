// A Closer Look at Functions

// Coding Challenge #3


/*
    Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
    as an arrow function, and using chaining!
    
    Test data:
        § Data 1: [5, 2, 4, 1, 15, 8, 3]
        § Data 2: [16, 6, 10, 5, 6, 1, 4]
    
    GOOD LUCK 😀
*/


const calcAverageHumanAge = ages => 
    ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((sum, age, i, arr) => sum + age / arr.length, 0);

// Test data
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

console.log("Tuổi trung bình của chó (theo năm người) cho Data 1:", calcAverageHumanAge(testData1));
console.log("Tuổi trung bình của chó (theo năm người) cho Data 2:", calcAverageHumanAge(testData2));