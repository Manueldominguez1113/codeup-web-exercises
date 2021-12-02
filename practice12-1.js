// 0 available spots
// 20 total parking spots
// empty is false
//loop until a parking spot opens up


// i want to make a randomizer so that if the randomizer hits a specific number,
// a spot will clear out
let parking = 20
let leavingCar = Math.floor(Math.random() * (5))

function waitingForASpot() {
    let minutes = 0
    for (parking; parking > 0; leavingCar = Math.floor(Math.random() * (5))) {
        if (leavingCar === 3) {
            parking = parking - 1;
            console.log("a spot opened up! " + parking + " cars to go!");
        } else {
            minutes++;
            console.log("still waiting.. waited " + minutes + "0 minutes..");
        }
    }
    console.log("empty lot!! only took a little under " + Math.ceil((minutes * 10) / 60) + " hours!");
}

function parkingSpots(x) {
    for (let i = 20; i > 0; i--) {
        console.log("there are " + i + " parking spots open..");
    }

}


// waitingForASpot();


let v = 0
do {
    console.log("number is " + v)
    v = v + 2
//v++;
//v++;       // or if v%2===0 log it -> that will log by evens only
} while (v <= 50);

console.log("\n\n\n do while loop")

let h = 0
do {
    console.log(h)
    h++
}
while (h <= 10);

console.log("\n\n\twhile loop")
y = 0
while (y <= 10) {
    console.log(y)
    y++
}

realPassword = "Thisisagoodpassword1!"

function lockdown(password){
 password=prompt("please enter your password...", "");

    for(let i=3;(i>0)&&(password!==realPassword);i--){
        alert("wrong password!" +i+" attempts left!");
        password=prompt("please enter password again...", "");

    }
    if(password===realPassword){
    return alert("correct!");
    }
    return alert("account locked! please contact customer support....")     //in theory, cool. cant actually lock an account
                                                                                // without going into more detail..
}
lockdown();

/*function promptt(password) {                                  // do while password prompt; y'know.. without a lockdown feature..
    password = false
    do {
        password = prompt("please enter your password...", "")
        if (password !== realPassword) {
            alert("wrong password! hint:\'Thisisagoodpassword1!\'");
        }

    } while (password !== realPassword);

    return alert("correct!");


};

promptt();*/

