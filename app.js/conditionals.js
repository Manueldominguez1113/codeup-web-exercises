"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *                      i use if-else-if-else so often, i ran switch to be different
 *
 *                      .. im back from a few lines under... realized it now.. i preformed both and figured ill keep it this
 *                      way so comments make sense.
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/*
function analyzeColor(color) {
    switch (color) {
        case "blue":
            return "blue is the color of the ocean!";
            break;
        case "red":
            return "red is the color of the inside of a good watermelon!";
            break;
        case "green":
            return "green is the color of the outside of a good watermelon!";
            break;
        case "yellow":
            return "yellow is the color of the sun! but dont look at it!";
            break;
        case "brown":
            return "brown is the color of mud!";
            break;
        case "black":
            return "black is the color of night!";
            break;
        case "white":
            return "white is the color of my socks!";
            break;
        default:
            return "hm. i cant really think of something that is "+color+" right now..";
            break;
    }
}
*/


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*
console.log(analyzeColor(randomColor));
*/


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 * when you decided to preform the action before it was requested..
 */
function analyzeColor(color) {
    if (color == "blue") {
        return "blue is the color of the ocean!";
    } else {
        if (color == "red") {
            return "red is the color of the inside of a good watermelon!";
        } else {
            if (color == "green") {
                return "green is the color of the outside of a good watermelon!";
            } else {
                if (color == "yellow") {
                    return "yellow is the color of the sun! but dont look at it!";
                } else {
                    if (color == "brown") {
                        return "brown is the color of mud!";
                    } else {
                        if (color == "black") {
                            return "black is the color of night!";
                        } else {
                            if (color == "white") {
                                return "white is the color of my socks!";
                            } else {
                                return "hm. i cant really think of something that is " + color + " right now..";
                            }
                        }
                    }
                }
            }
        }
    }
}


console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*let clr = prompt("please input your favorite color", "");
alert(analyzeColor(clr));*/

/*^^^completed, easy. but commenting the completion out to continue coding preview within intellij..
if you wish to test my answers simply comment it back in/out */


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {
    total = parseFloat(total);
    switch (luckyNumber) {
        case 0:
            return "your total today is:\n" + total;
            break;
        case 1:
            return "(10% off)!\n" + (total - (total * .10)).toFixed(2);
            break;
        case 2:
            return "(25% off)!!\n" + (total - (total * .25)).toFixed(2);
            break;
        case 3:
            return "(35% off)!!!\n" + (total - (total * .35)).toFixed(2);
            break;
        case 4:
            return "(50% off)!!!!\n" + (total / 2).toFixed(2);
            break;
        case 5:
            return "(100% off)!!!!!!!!! congrats!\n" + (total * 0).toFixed(2);
            break;
        default:
            return "i know i dont need a default, but you should never see this in practicality."
            break;
    }
}

console.log(calculateTotal(0, 50.733));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let bill = prompt("please enter your bill", "");
alert("lucky number " + luckyNumber + "!!\n price before:" + bill + "\n" + calculateTotal(luckyNumber, bill));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 *          ill complete first here then comment out and refract my code
 */
/*      <- delete to see my work
let con = confirm("would you like to input a number?");
if (con = true) {
    let num = prompt("enter your number", "");
    num = parseInt(num)
    if (num % 2 == 0) {
        alert("this number is even!");
    } else {
        alert("this number is odd!");
    }
    alert("this number plus 100 is: " + (num + 100))
    if (num === Math.abs(num)) {
        alert("this number is positive!");
    } else {
        alert("this number is negative!")
    }
}
              delete to see my work   -> */


/* REFRACTIONSSSS*/

function numberFun(){}

let con= confirm("would you like to input a number?");
