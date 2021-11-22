
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



