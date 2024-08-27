// A Closer Look at Functions

// Coding Challenge #2


/*
    This is more of a thinking challenge than a coding challenge 🤓

    Your tasks:
        1. Take the IIFE below and at the end of the function, attach an event listener that
    changes the color of the selected h1 element ('header') to blue, each time
    the body element is clicked. Do not select the h1 element again!
        2. And now explain to yourself (or someone around you) why this worked! Take all
    the time you need. Think about when exactly the callback function is executed,
    and what that means for the variables involved in this example.
(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
})();
GOOD LUCK 😀
*/


function calcAverageHumanAge(ages) {
    // 1. Tính tuổi chó theo năm người
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    
    // 2. Loại bỏ chó dưới 18 tuổi người
    const adultDogs = humanAges.filter(age => age >= 18);
    
    // 3. Tính tuổi trung bình của chó trưởng thành
    const averageAge = adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length;
    
    return averageAge;
}

// 4. Chạy hàm với cả hai bộ dữ liệu test
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

console.log("Tuổi trung bình của chó (theo năm người) cho Data 1:", calcAverageHumanAge(testData1));
console.log("Tuổi trung bình của chó (theo năm người) cho Data 2:", calcAverageHumanAge(testData2));