function multiply() {
    var rows = prompt("how many rows for your table?");
    var columns = prompt("how many columns for your table?");
    if (rows == '' || rows == null)
        rows = 10;
    if (columns == '' || columns == null)
        columns = 10;
    createTable(rows, columns);
    function createTable(rows, columns) {
        var j = 1;
        var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
        for (i = 1; i <= rows; i++) {
            output = output + "<tr>";
            while (j <= columns) {
                output = output + "<td>" + i * j + "</td>";
                j = j + 1;
            }
            output = output + "</tr>";
            j = 1;
        }
        output = output + "</table>";
        document.write(output);
    }
}


function findArmstrong() {

    let lowNumber = parseInt(prompt('Enter a positive low integer value: '));
    let highNumber = parseInt(prompt('Enter a positive high integer value: '));

    console.log('Armstrong Numbers:');


    for (let i = lowNumber; i <= highNumber; i++) {


        let numberOfDigits = i.toString().length;

        let sum = 0;


        let temp = i;


        while (temp > 0) {

            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;

            temp = parseInt(temp / 10);
        }

        if (sum == i) {
            console.log(i);
        }
    }
}

function is_perfect(number) {
    var temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
is_perfect(28);


function ishappy() {
    var num = 5239;
    var sum = 0;
    while (num > 0) {
        sum += Math.pow(num % 10, 2);
        num = Math.floor(num / 10);
        console.log(num)
    }
    console.log(sum);
    if (num == 0) {
        alert("happy number")
    } else {
        alert("Not happy number")
    }
}

function isStrong() {
    var n = 145, reminder, sum = 0;

    var tmp = n;

    while (n != 0) {
        reminder = n % 10;
        sum = sum + factorial(reminder);
        n = Math.floor(n / 10);
    }
    if (sum == tmp)
        document.write(tmp + " is a strong number<br />");
    else
        document.write(tmp + " is not a strong number<br />");


    function factorial(n) {
        var fact = 1;

        for (var i = 2; i <= n; i++)
            fact = fact * i;

        return fact;
    }
}

function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(lcm_two_numbers(3, 15));
console.log(lcm_two_numbers(10, 15));


function second_largest() {
    var secondMax = function secondMax() {
        var arr = [20, 120, 111, 215, 54, 78];
        var max = Math.max.apply(null, arr);
        arr.splice(arr.indexOf(max), 1);
        return Math.max.apply(null, arr);
    };

    var arr = [20, 120, 111, 215, 54, 78];
    var max2 = secondMax(arr);
    console.log(max2);
}

function sum() {
    var value = 2568,
        sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    console.log(sum);

}

function countchar() {
    let s = 'kfljlajdjjfa;jdf;j';
    var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
    console.log(result);
}