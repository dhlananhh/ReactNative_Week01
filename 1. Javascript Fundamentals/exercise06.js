// Coding Challenge #6


/*
    Steven is still building his tip calculator, using the same rules as before: 
        Tip 15% of the bill if the bill value is between 50 and 300, 
        and if the value is different, the tip is 20%.

    Your tasks:
        1.  Write a function 'calcTip' that takes any bill value as an input and returns
        the corresponding tip, calculated based on the rules above (you can check out
        the code from first tip calculator challenge if you need to). 
            Use the function type you like the most. Test the function using a bill value of 100
        2.  And now let's use arrays! So create an array 'bills' containing the test data
        below
        3.  Create an array 'tips' containing the tip value for each bill, calculated from
        the function you created before
        4.  Bonus: Create an array 'total' containing the total values, so the bill + tip

    Test data: 125, 555 and 44
*/


// 1. Hàm tính tiền tip
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Kiểm tra hàm với giá trị hóa đơn là 100
console.log("Tip for $100 bill:", calcTip(100));

// 2. Mảng chứa dữ liệu test
const bills = [125, 555, 44];

// 3. Mảng chứa các giá trị tip tương ứng
const tips = bills.map(calcTip);

// 4. Bonus: Mảng chứa tổng giá trị (hóa đơn + tip)
const totals = bills.map((bill, index) => bill + tips[index]);

// In kết quả
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);