function showMultiplcationTable(x) {
    for (var i = 1; i <= 10; i++) {

        console.log(x + " x " + i + " = " + (x * i));

    }
};

showMultiplcationTable(4);
console.log("\n\n\n ") // to space my work
function random() {
    return Math.floor(Math.random() * (200 - 20) + 20);

};

function randomNum() {

    for (var i = 1; i < 11; i++) {
        x = random();
        if (!(x % 2)) {
            console.log(x + " is an even, random number..");
        } else {
            console.log(x + " is an odd, random number..");
        }
    }

}

randomNum();
console.log("\n\n\n ") // to space my work

function dupe(x) {
   if(x<=0){
       return console.log("...")
   }
    let log="";
    let i= 1;
    log+=i +"\n";

    for (i = 2; i <= x; i++) {
        log+= i;
        for (let j = 1; j < i; j++) {
            log+= +i;
        }
        log+="\n";


    }
    console.log(log);
}
dupe(0);


console.log("\n\n\n ") // to space my work


function countdown(x) {
    x = 100
    console.log(x)
    while (x > 0) {
        console.log(x - 5);
        x = x - 5;
    }
};
countdown();
 //had to do it in while formation to understand how to translate it to "for", more used to while...

console.log("\n\n\n ") // to space my work

function forCountdown(x) {
    for (let i = 0; x > 0; i = i++) {
        console.log(x);
        x=x-5;
    }
}

forCountdown(100);

