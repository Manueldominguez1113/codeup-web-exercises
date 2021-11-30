/*
### IF / ELSE IF / ELSE
*/

/*#### Create a function called `getToDestination` which will help determine how a person can get to their destination!*/

/*    It will accept 4 arguments and the parameter names are:*/

/*    - age - the age of the rider
- isInsured - a boolean telling the function if the rider has insurance
- hasCar - a boolean describing if the rider has a car
- canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)*/
function getToDestination(age, isInsured, hasCar, canGetRideShare) {

    /*
1. If the rider is over 16, has insurance, and has a car then they can use their own vehicle
2. If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
3. If the rider meets none of the above, they should call a friend for a ride!

    This `getToDestination` should not return any value, but rather console log based on the conditions met.
    */
    if (age > 16 && isInsured === true && hasCar === true) {
        console.log("this rider can use their own vehicle.");
    } else if ((age < 16 || isInsured === false || hasCar === false) && canGetRideShare === true) {
        console.log("this rider should call up a ride Share.")
    } else {
        console.log("this rider should call a friend for a ride!")
    }
}

getToDestination(20, false, true, true);
getToDestination(20, false, true, false);
getToDestination(20, true, true, false);

/* #### getToDestination, part 2*/
console.log("\n\n\n\t part 2")
/*- Create a function called canGetRideshare() which will *RETURN* a boolean
- It will determine if there are drivers nearby and the person has enough money for the ride
- Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
- Call canGetRideshare() in the else if *after* !isLegalDriver &&...
- Be sure to log to the user if they can or cannot get a rideshare*/

/* commented out to do the next one with more info and better coding
function canGetRideShare(drivers, money) {
    if (drivers === true && money >= 5.00) {
        console.log("rideshare is available for this rider!")
        return true;

    } else if (drivers === false) {
        console.log("there are no drivers in your area...")

    }
    if (money < 5.00) {
        console.log("you do not have enough money for rideShare..")
    }
    return false; //left the return out of the if statement so that whether drivers is false or money is not enough
    // or even both! it shall return false and give the proper logs for any scenario.
}

canGetRideShare(true, 8);
canGetRideShare(false, 7);
canGetRideShare(false, 3);
*/

/*BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
- Consider this: What if mileage determined:
    - If the rider has enough funds?
    - If there is a driver close enough to service the rider?   */

function canGetRideShare(drivers, money, mileage) {
    parseInt(mileage), parseInt(money)
    mileage = mileage * 1.25 //making up a rate for every mile

    if (drivers === true && money >= mileage) {
        console.log("rideshare is available for this rider!\n this ride will cost " + mileage);
        return true;

    } else if (drivers === false) {
        console.log("there are no drivers in your area...");

    }
    if (money < mileage) {
        console.log("you do not have enough money for the distance you are traveling with rideShare..\n" +
            "you currently have " + money.toFixed(2) + " and require " + mileage.toFixed(2));
    } else {
        if (money >= mileage) {
            console.log("your trip would have cost " + mileage + ".. please try again when drivers become available.")
        }
    }
    return false;

}

canGetRideShare(true, 8, 3);
canGetRideShare(false, 7, 10);
canGetRideShare(false, 160, 50);


console.log("\n\n\n\tSWITCH STATEMENTS");


/*Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
- This will involve multiple switch statements and functions
- Orchestrate the statements in a central function that is responsible for calling and checking for errors
    each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
    ie: `function getBodyStyle(input){return input}`*/

//awesome! going to create an html to add to this js now to make input commands...
function bodyPrompt(body) {
    body = prompt("please input the amount of doors on your car", "i.e.: 2D, 4D, 6D...")
    switch (body) {
        case "2D":
            console.log("2D")
            return body;
            break;
        case "4D":
            console.log("4D")
            return body;
            break;
        case "6D":
            console.log("6D");
            return body;
            break;
        default:
            alert("error, " + body + " is not a valid option.");
            body = null

    }
    console.log(body);
};

function typePrompt(type) {
    type = prompt("what kind of car is it?", "sports, sedan,truck...")
    switch (type) {
        case "sports" :
            console.log("Sports")
            return type;
            break;
        case "sedan" :
            console.log("Sedan")
            return type;
            break;
        case "truck" :
            console.log("Truck")
            return type;
            break;
        default:

            alert("Error, " + type + " is not a valid option.");
            return type = null;
    }

};

function colorPrompt(color) {
    color = prompt("finally, put in the color of your car..", "i.e: blue, brown, red..")
    switch (color) {
        case "red" :
            console.log("red")
            return color;
            break;
        case "blue" :
            console.log("blue")
            return color
            break;
        case "green" :
            console.log("green")
            return color
            break;
        default:
            alert("Error, " + color + " is not a valid option.");
            return color = null;
    }

};

// console.log(type);

/*        - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user*/
function bodyErrorCheck(body) {
    !body ? bodyErrorCheck(bodyPrompt()) : body + console.log(" succeeded " + body);
};

function typeErrorCheck(type) {
    !type ? typeErrorCheck(typePrompt()) : type + console.log(" succeeded " + type);
};

function colorErrorCheck(color) {
    !color ? colorErrorCheck(colorPrompt()) : color + console.log(" succeeded " + color);
};


function sellCar(body, type, color) {
    /*    - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
    - The user should be able to enter their
    - Body style (2D, 4D, etc)
    - Vehicle type (sports car, sedan, compact, truck, etc)
    - Vehicle color*/

    if (body && type && color != null) {
        confirm("soo.. your car is a " + body + " " + type + " that is " + color + "?") ? alert("objective completed!") : alert("error, " +
            "please try again..") + sellCar(bodyPrompt(), typePrompt(), colorPrompt());
    } else {
        bodyErrorCheck();
        typeErrorCheck();
        colorErrorCheck();

    }

};


sellCar(null, null, null);


/*
function bodyPrompt(body) {
    body = prompt("please input the amount of doors on your car", "i.e.: 2D, 4D, 6D...")
    switch (body) {
        case "2D":
            confirm("your car has 2 doors?") ? console.log("2D") : alert("please try again") + bodyPrompt();
            break;
        case "4D":
            confirm("your car has 4 doors?") ? console.log("4D") : alert("please try again") + bodyPrompt();
            break;
        case "6D":
            confirm("your car has 6 doors?") ? console.log("6D") : alert("please try again") + bodyPrompt();
            break;
        default:
            return alert("error, " + body + " is not a valid option.") + bodyPrompt();
            break;
    }
    return body;
};

function typePrompt(type) {
    type = prompt("what kind of car is it?", "sports, sedan,truck...")
    switch (type) {
        case "sports" :
            confirm("your car is a Sports car?") ? console.log("Sports") : alert("please try again") + typePrompt();
            break;
        case "sedan" :
            confirm("your car is a Sedan?") ? console.log("Sedan") : alert("please try again") + typePrompt();
            break;
        case "truck" :
            confirm("your car is a Truck?") ? console.log("Truck") : alert("please try again") + typePrompt();
            break;
        default:
            return alert("error, " + type + " is not a valid option.") + typePrompt();
    }
    return type;
};

function colorPrompt(color) {
    color = prompt("finally, put in the color of your car..", "i.e: blue, brown, red..")
    switch (color) {
        case "red" :
            confirm("your car is red?") ? console.log(true) : alert("please try again") + colorPrompt();
            break;
        case "blue" :
            confirm("your car is blue?") ? console.log(true) : alert("please try again") + colorPrompt();
            break;
        case "green" :
            confirm("your car is green?") ? console.log(true) : alert("please try again") + colorPrompt();
            break;
        default:
            return alert("error, " + color + " is not a valid option.") + colorPrompt();
            break;
    }
    return color
};
// console.log(type);
function sellCar(body, type, color) {

    confirm("soo.. your car is a " + body + " " + type + " that is " + color + "?") ? alert("objective completed!") : alert("error, " +
        "please try again..") + sellCar(bodyPrompt(), typePrompt(), colorPrompt());
};

//very convoluted code i know, but i could've easily made the last part the entire function and ignored switch completely, so
//its complex just to make it interesting

sellCar(bodyPrompt(), typePrompt(), colorPrompt());*/

//kept code from before because i liked where i was going but it just wasn't what was asked of me. so i tailored it to the objective
