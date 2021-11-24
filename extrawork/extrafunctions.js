/*# Function Drills
Functions using conditionals but not loops or arrays:*/

/*- Make a function named `isOdd(number)*/
function isOdd(x) {
    return !!(x % 2);
}

console.log(isOdd(3));

/*- Make a function named `isEven(number)`*/
function isEven(x) {
    return !(x % 2);
}

console.log(isEven(4));

/*- Make a function named `identity(input)` that returns the input exactly as
provided.*/
function identity(input) {
    return input;
}

console.log(identity("hello i am new to this but already live to code!"));

/*- Make a function named `isFive(input)`*/
function isFive(x) {
    if (x === 5) {
        return true;
    } else {
        return false;
    }
}

console.log("is five answer:" + isFive(5));

/*- Make a function named `addFive(input)` that adds five to some input.*/
function addFive(x) {
    return x + 5;
}

console.log(addFive(5));


/*- Make a function named `isMultipleOfFive(input)`*/
function isMultipleOfFive(x) {
    return !(x / 5 % 1);
}

console.log("isMultipleofFive:" + isMultipleOfFive(11));


/*- Make a function named `isThree(input)`*/
function isThree(x) {
    return x === 3;
}

console.log("isThree:" + isThree(6));

/*- Make a function named `isMultipleOfThree(input)`*/
function isMultipleOfThree(x) {
    return !(x / 3 % 1);
}

console.log("isMultipleOfThree: " + isMultipleOfThree(6));


/*- Make a function named `isMultipleOfThreeAndFive(input)`*/
function isMultipleOfThreeAndFive(x) {
    return !(x / 5 % 1) && !(x / 3 % 1);
}

console.log("isMultipleOfThreeAndFive" + isMultipleOfThreeAndFive(15));
console.log("isMultipleOfThreeAndFive" + isMultipleOfThreeAndFive(10));

/*- Make a function named `isMultipleOf(target, n)` which checks if target is*/

/*evenly divisible by `n`*/

function isMultipleOf(x, n) {
    let answer = !(x / n % 1)
    if (answer === true) {
        return console.log(x + " is a multiple of " + n);
    } else return console.log(x + " is not a multiple of " + n);
}

isMultipleOf(33, 2);


/*- Make a function named `isTrue(boolean)`*/
function isTrue(boolean) {
    return boolean;
}

console.log(isTrue(false));

/*- Make a function named `isFalse(boolean)`*/
function isTrue(boolean) {
    return !boolean;
}

console.log(isTrue(false));


/*- Make a function named `isTruthy(input)`, remember that values other than true
will behave like true*/
function isTruthy(val) {
    if (val) {
        return true;
    } else return false;
}

console.log("istruthy?:  " + isTruthy(null));

/*- Make a function named `isFalsy(input)`, remember that values other than false
behave like false*/
function isFalsy(val) {
    if (!val) {
        return true;
    } else return false;
}

console.log("istruthy?:  " + isFalsy(null));

/*- Make a function named `isVowel(letter)`*/
function isVowel(letter) {
    letter = letter.toString();
    letter = letter.toLowerCase();

    return letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u";
}

console.log(isVowel("H"));


/*- Make a function named `isConsonant(letter)`*/

/*B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, and Z*/
function isConsonant(letter) {
    letter = letter.toString();
    letter = letter.toLowerCase();

    return letter == "b" || letter == "c" || letter == "d" || letter == "f" || letter == "g" || letter == "h" || letter == "j" || letter == "k" || letter == "l" || letter == "m" || letter == "n" || letter == "p" || letter == "q" || letter == "r" || letter == "s" || letter == "t" || letter == "v" || letter == "w" || letter == "x" || letter == "y" || letter == "z";
}

console.log("is consonant answer " + isConsonant("A"));


/*- Make a function named `isCapital(letter)`*/
function isCapital(letter) {

    if (letter === letter.toUpperCase()) {
        return true;
    } else return false;
}

console.log(isCapital("h"));


/*- Make a function named `isLowerCase(letter)`*/

function isLowerCase(letter) {

    if (letter === letter.toLowerCase()) {
        return true;
    } else return false;
}

console.log("lowercase answer  " + isLowerCase("h"));


/*- Make a function named `hasLowerCase(string)` that returns if a string has any
lower cased letter*/

function hasLowerCase(string) {
    let lowercase = string.toLowerCase();
    lowercase = lowercase.split("");
    return string.includes(lowercase[0]) || string.includes(lowercase[1]) || string.includes(lowercase[2]) || string.includes(lowercase[3]) || string.includes(lowercase[4]) || string.includes(lowercase[5]) || string.includes(lowercase[6]) || string.includes(lowercase[7]) || string.includes(lowercase[8]) || string.includes(lowercase[(9)]) || string.includes(lowercase[10]) || string.includes(lowercase[11]) || string.includes(lowercase[12]) || string.includes(lowercase[13]) || string.includes(lowercase[14]) || string.includes(lowercase[15]) || string.includes(lowercase[16]) || string.includes(lowercase[17]) || string.includes(lowercase[18]) || string.includes(lowercase[19]) || string.includes(lowercase[20]);
}

console.log(" has lowercase answer  " + hasLowerCase("canyouTell"));


/*- Make a function named `isSpace(letter)` that returns if a character is a space
character*/

function isSpace(letter) {
    return letter.includes(" ");

}

console.log(" is space answer is " + isSpace(" "));

/*- Make a function named `isZero(number)`*/
function isZero(number) {
    return number === 0;

}

console.log(isZero(9));


/*- Make a function named `notZero(input)` that returns true if the input is not
zero*/
function isNotZero(number) {
    return !(number === 0);

}

console.log(isNotZero(9));


/*- Write a function named `lowerCase(string)`*/
function lowerCase(string) {
    return string.toLowerCase();
}

console.log(lowerCase("HI HOW ARE YOU "))

/*- Write a function named `double(n)` that returns a number times two*/
function double(x) {
    return x * 2;
}

console.log(double(5));

/*- Write a function named `triple(n)` that returns a number times 3*/
function triple(x) {
    return x * 3;
}

console.log(triple(5));


/*- Write a function named `quadruple(n)` that returns a number times 4*/
function quadruple(x) {
    return x * 4;
}

console.log(quadruple(5));

/*- Write a function named `half(n)` that returns 1/2 of the provided input*/
function half(x) {
    return x / 2;
}

console.log(half(5));

/*- Write a function named `subtract(a, b)` that returns `a` minus `b`*/
function subtract(x, y) {
    return x - y;
}

console.log("subtract answer is:  " + subtract(5, 3));


/*- Write a function named `multiply(a, b)` that returns the product of `a` times
    `b`*/
function multiply(x, y) {
    return x * y;
}

console.log(multiply(5, 3));

/*- Write a function named divide(a, b) that returns `a` divided by ~b~*/
function divide(x, y) {
    return x / y;
}

console.log(divide(5, 3));

/*- Write a function named `remainder(a, b)` that returns the remainder after
dividing a by b*/
function remainder(x, y) {
    return x % y;
}

console.log("remainder answer is  " + remainder(5, 3));

/*- Make a function named `modulo(a, b)` that returns the returns the remainder
after dividing a by b
        ??? i had to look up and understand modulus to understand that this is still the remainder,
        and will look just like the last function. at least now i understand how to preform modulus..
*/
function modulo(x, y) {
    return x % y;
}

console.log("modulo answer is  " + modulo(5, 10));


/*- Write a function named `cube(n)` that returns n * n * n*/
function cube(n) {
    return n * n * n;
}

console.log("answer to cube is..." + cube(9));

/*- Write a function named `squareRoot(n)` that returns the square root of the
input*/
function squareRoot(n) {
    return Math.sqrt(n);
}

console.log("answer to squareRoot is..." + squareRoot(9));


/*- Write a function named `cubeRoot(n)` that returns the cube root of the input*/
function cubeRoot(n) {
    return Math.cbrt(n);
}

console.log(cubeRoot(265));

/*- Write a function named `invertSign(number)` that returns a negative version of
a postive number, a positve version of negative, and false for all else.*/
function invertSign(x) {
    if (!isNaN(x)) {
        return x *= -1;
    } else return false;

}

console.log(invertSign(23.33));

/*- Write a function named `degreesToRadians(number)`*/
function degreesToRadians(number) {
    return (number * Math.PI / 180);
}

console.log(degreesToRadians(360));

/*- Write a function named `radiansToDegrees(number)`*/
function radiansToDegrees(number) {
    return (number * 180 / Math.PI);
}

console.log(radiansToDegrees(6.283185307179586));

/*- Make a function named `isBlank(input)` that determines if a given input is
spaces, newline characters, or tabs.*/

function isBlank(input) {
    console.log(input);
    if (input.includes(" ") || input.includes("\n")) {
        return true;
    } else {
        return false;
    }

}

console.log(isBlank("this line makes a new line and the function isBlank will call it out below \n"));

/*- Make a function named `trim(string)` that removes empty spaces before and
after the input.*/

function trim(string) {
    return string.trim();
}

console.log(trim("       hello      "));

/*- Make a function named `areEqual(input1, input2)` that returns if both inputs
have the same value*/
function areEqual(input1, input2) {
    return input1 == input2;
}

console.log(areEqual('24', 24));
/*- Make a function named `areIdentical(input1, input2)` that returns if both
    inputs are same value and data type.*/
function areIdentical(input1, input2) {
    return input1 === input2;
}

console.log("identicality(is that a word?) answer is here:  " +areIdentical('24', 24));

/*- Make a function named `not(input)` returns the input with a flipped boolean*/
function not(input){
    return !input;
}
console.log(not(false));
/*- Make a function named `notNot(input)` that the negation of the negation of the
input.*/
function notnot(input){
    return !!input;
}
console.log(notnot(false));

/*- Make a function named `and(predicate1, predicate2)` that returns the logical
operation of AND*/

function and(predicate1, predicate2){
    return predicate1 && predicate2;
}
console.log(and(true, true));


/*- Make a function named `or(predicate1, predicate2)` that returns the logical
operation of OR*/
function or(predicate1, predicate2){
    return predicate1 || predicate2;
}
console.log("or answer is   "+or(true, false));


/*- Write a function called `reverseString(string)` that reverses a string*/
function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString("hi my name is what"))
/*- Make a function named `absoluteValue(number)` that returns the absolute value
of a number.*/
function absoluteValue(number){
    return Math.abs(number);
}
console.log(absoluteValue(-24));
/*- Make a function named `rollDice(sides)` that takes in an argument containing
the number of sides the die should have. Generate a random number between 1 up
to and including the number of sides.*/
function rolldice(sides){
let roll =Math.floor(Math.random() * ( sides-1) +1);
return roll
}
console.log("rolling die..." +rolldice(6));


console.log("\n \n \t Simple Function Drills");

/*1. Make a function called returnTwo() that returns the number 2 when called*/
function returnTwo(){
    return 2
}
console.log(returnTwo());


/*
    1. Make a function called sayHowdy() which console.logs the string “Howdy!”

   Test this function by directly calling `sayHowdy()` */
function sayHowdy(){
    console.log("Howdy!");
}
sayHowdy();

/*Remember this function does not need a defined return value

1. Make a function called returnName() that returns the string of your name*/
function returnName(name){
    return "hello " + name;

}

console.log(returnName("Alex"));



/*    1. Make a function called addThree() which takes in a number input and returns the number plus 3.*/
function addThree(n){
return n+3;
}
console.log(addThree(5));

 /*   1. Make a function called sayString() which returns the string input passed in.*/
function sayString(string){
    return string
}
console.log(sayString('codeup'));


console.log("\n \n \tChallenge Function Drills");

/*- Write a function called `identity(input)` that takes in an argument called
input and returns that input.*/
function identity(input){
    return input
}
console.log(identity("hello"));

- Write a function called `getRandomNumber(min, max)` that returns a random
number between min and max values sent to that function call.

/*- Write a function called `first(input)` that returns the first character in the
provided string.*/

/*- Write a function called `last(input)` that returns the last character of a
string*/

/*- Write a function called `rest(input)` that returns everything but the first
character of a string.*/

/*- Write a function called `reverse(input)` that takes a string and returns it
reversed.*/

/*- Write a function called `isNumeric(input)` that takes an input and returns a
boolean if the input is numeric.*/

/*- Write a function called `count(input)` that takes in a string and returns the
number of characters.*/

/*- Write a function called `add(a, b)` that returns the sum of a and b*/

/*- Write a function called `subtract(a, b)` that return the difference between
the two inputs.*/

/*- Write `multiply(a, b)` function that returns the product*/

/*- Write a `divide(numerator, denominator)` function that returns a divided by b*/

/*- Write a `remainder(number, divisor)` function that returns the remainder left
over when dividing `number` by the `divisor`*/

/*- Write the function `square(a)` that takes in a number and returns the number
multiplied by itself.*/

/*- Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
and your square function and not + or * operators*/

/*- Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
first parameter is the name of the math function you want to apply. a and b
are the two numbers to run that function on.*/

console.log("\n\n \tEven More Function Bonuses")

/*1. Create a function that will return how many whitespace characters are at the
beginning and end of a string.*/

/*1. Create a function that takes in two string inputs.*/

/*- If the second string input is present in the first, return the first input
string with the second input string removed from it.*/

/*- If the second string input is present multiple times in the first, the
second string will only be removed where it first occurs in the first
string.*/

/*- If the second string input is not present in the first, return the first
string as entered in the function.*/

/*1. Create a function that takes in a string and returns true if the last letter
is an "a" (otherwise, return false).*/

/*1. EXTRA CHALLENGE: create a function that will return how many whitespace
characters are at the beginning of a string (hint: use regex).*/

/*1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"*/

/*- Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"*/
/*- Create a function `returnMessage()` that takes in a function and returns the call to the function*/
/*- Experiement passing in different functions.*/

/*1. Create a function, `willLoginUser()` that takes in a username string,
    password string, user age, a boolean indicating if they are an admin.
    The function will return true if the username is not the same as the
password and the user is at least 18 years old. If the user is an admin,
    they do not have to be a certain age but the password must still not match
the username. */