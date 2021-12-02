let isAtBar = false;
let bac = .00;
let age = 22;
let cashOnHand = 14.99;


let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink) { // true or false
    console.log("Have a brewski my dude!");
} else { // it was not true
    console.log("Sorry buddy, no brew for u");
}

if (canHaveADrink) {
    if (isAtBar) {
        console.log("have a seat and enjoy");
    } else {
        console.log("have a cup togo and drink responsibly!");
    }
}


function flightStatus(clouds, traffic) {
    traffic = parseInt(traffic)

    if (!clouds && traffic <= 10) {
        console.log("today is a good day to fly!")
    } else {
        console.log("today is not a good day to fly...")
    }
}
flightStatus(false,9);


/*make four functions that add subtract multiply divide first number second number, return the answer. */
function add(addOne,addTwo){
addOne= parseInt(addOne), addTwo=parseInt(addTwo)
   return addOne + addTwo
}
console.log("addition 6 + 7 =" + add(6,7));

function subtract(subOne,subTwo){
    subOne= parseInt(subOne), subTwo=parseInt(subTwo)
    return subOne - subTwo
}
console.log("subtract 6 + 7 =" +subtract(6,7));

function multiply(multiOne,multiTwo){
    multiOne= parseInt(multiOne), multiTwo=parseInt(multiTwo)
    return multiOne * multiTwo
}
console.log("mutliple  6 + 7 =" +multiply(6,7));

function divide(divOne,divTwo){
    divOne= parseInt(divOne), divTwo=parseInt(divTwo)
    return divOne / divTwo
}
console.log("divide  6 + 7 =" + divide(6,7));

function remainder(remainOne,remainTwo){
    remainOne= parseInt(remainOne), remainTwo=parseInt(remainTwo)
    return remainOne % remainTwo
}
console.log("remainder  6 + 7 =" + remainder(6,7));



