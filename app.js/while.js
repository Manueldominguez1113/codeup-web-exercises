function multiply(x) {
    while (x < 65537) {
        console.log(x);
        x = x * 2
    }
};
multiply(1);


/*An ice cream seller can't go home until she sells all of her cones.
First write enough code that generates a random number between 50 and 100       math.random to make a starting amount
representing the amount of cones to sell before you start your loop.
Inside of the loop your code should generate another random number between 1 and 5,    second random number 1-5
simulating the amount of cones being bought by her clients. Use a do-while loop to log      must be do-while
to the console the amount of cones sold to each person.*/


let allCones = Math.floor(Math.random() * 50) + 50;

function customer() {
    let sold = Math.floor(Math.random() * 5) + 1;
    return sold
}

function sellCones(input) {


    do {
        input = input - customer()
        console.log(customer() + " cones sold...");
    } while ((input >= customer()) &&(input>0));


    if (input <= 0) {
        console.log("wow! i sold all my cones!!");
    } else if (input < customer()) {
        console.log("i have " + input + " cones, i cannot sell you " + customer());
    }else
        console.log("i had " +input+ " left..");
}
sellCones(allCones);

/*The output should be similar to the following:

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones*/