var a = 1;
var b = a++;
var c = ++a;
console.log("a is " + a +"  and b is " + b + " and C is " + c);
// what is the value of a, b, and c?


var d = "hello";
var e = false;

d++;
e++;
console.log(d + "and e is " + e);


var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed);

var price = 2.7;
console.log(price.toFixed(2));

var price = "2.7";
price = parseInt(price)
console.log(price.toFixed(2));

console.log(isNaN(0));

console.log(isNaN(1));

console.log(isNaN(""));

console.log(isNaN("string"));

console.log(isNaN("0"));

console.log(isNaN("1"));

console.log(isNaN("3.145"));

console.log(isNaN(Number.MAX_VALUE));

console.log(isNaN(Infinity));

console.log(isNaN("true"));

console.log(isNaN(true));

console.log(isNaN("false"));

console.log(isNaN(false));

// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

console.log(!true);

console.log(!false);

console.log(!!true);

console.log(!!false);

console.log(!!0);

console.log(!!-0);

console.log(!!1);

console.log(!!-1);

console.log(!!0.1);

console.log(!!"hello");

console.log(!!"");

console.log(!!'');

console.log(!!"false");

console.log(!!"0");

var sample = "Hello, Codeup";
sample += " students! ";
console.log (sample);
sample = sample.replace("students!", "class")
console.log(sample);
console.log(sample.indexOf("C"));

console.log(sample.indexOf("Codeup"));
console.log(sample.substring(7,13));
let x = (3 + 5 + 1) * 3;

console.log("the movies will cost "+ x +" dollars.")

let n = (400 * 6) + (380 * 4) + (350 * 10)

console.log("the contracts will total "+ n +" dollars this week.")

function enrollment() {

    let classStudents = 28, classSchedule = 3, studentSchedule = 3, room= false, schedule= false

    if (classStudents < 30) {
        room = true
    }
    if (classSchedule === studentSchedule) {
        schedule = true
    }

    if (room && schedule === true) {
        console.log("this student may enroll in this course")
    } else
        console.log("this student may not enroll in this course");
}
    enrollment();


function purchase() {
    let cart = 3, offer = false, valid = false, premium = false, discount = false;
    if (cart >= 2) {
        offer = true
    }

    if (valid && premium || offer === true) {
        discount = true
    }
    if (discount === true) {
        return console.log("50% off!!")
    }
    else
        return console.log("your current price is...")
}
    purchase();

let username = '                               code up';
let password = '     notastrongpassword';
username = username.trim();
password = password.trim();

let passwordCheck = true
if (password.length <= 5){
    passwordCheck= false
    console.log("password must be more than 5 characters")
} else
    if (password.indexOf(username) > 0) {
        passwordcheck = false
        console.log("password cannot include username");
    }
if(username.length > 20){
    console.log("username must not exceed 20 characters");
}



