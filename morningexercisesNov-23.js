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