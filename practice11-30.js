/*  Write a function that accepts the top three bowling scores and returns the average.
    Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not
    Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case
    BONUS: return it with a space between each word
    Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players =
    [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables
    (call the function once per variable);
    Write a function that executes all of the above functions   */
function topThree(score1, score2, score3) {

    console.log("score 1: " + score1);
    console.log("score 2: " + score2);
    console.log("score 3: " + score3);
    return console.log("your average is.. " + ((score1 + score2 + score3) / 3));
}

topThree(300, 190, 200);

function threeOrFive(score1) {
    if (score1 > 300 || score1 < 0) {
        return console.log("not a valid score" + false);
    } else {
        switch (true) {
            case (!(score1 / 3 % 1) && !(score1 / 5 % 1)):
                console.log("fun fact: " + score1 + " is divisible by 3 AND 5!");
                break;
            case !(score1 / 3 % 1):
                console.log("fun fact: " + score1 + " is divisible by 3!");
                break;
            case !(score1 / 5 % 1):
                console.log("fun fact: " + score1 + " is divisible by 5!");
                break;
            default:
                return false;

        }
    }
}

console.log("\n\n")
threeOrFive(300);

function nameFix(string){

    return console.log(string.toLowerCase());

}
nameFix("ThEbEsTbOwLiNgPlAcEever");

function type(x){
  return console.log(x+" is a "+typeof x);
}
let score = 109, name = "bowling Is Fun", isBowlingFun = true, players = ["tom", "jerry", "Garfield"];
type(score);
type(name);
type(isBowlingFun);
type(players);

function executeALL(score1,score2,score3,nname){
    topThree(score1,score2,score3);
    threeOrFive(score1);
    threeOrFive(score2);
    threeOrFive(score3);
    nameFix(nname);
    type(score1)

}
executeALL(300,200,100,"AleX")

function myFunction (firstName, lastName){    //missing open bracket, also if this is a variable it cant do
return firstName + lastName;                    // return or what you've asked. created a function
};

function thatsNotMyName(name){
    if(name = "Laura"){
        return "that's me!, I'm " + name // name should not be in "", that creates it as a string
} else {                                    // also has a double }, which will break the function
    return "that's not my name"
}
};                                       //  that double bracket found should be placed at the end to better encapsulate

function toLower(name) {
    let letters = name.split("");
    let tempString = letters[0].toLowerCase();

    for (let x = 1; x < letters.length; x++) {
        if (letters[x] == letters[x].toUpperCase()) {
            tempString += ' ' + letters[x].toLowerCase();
        }
        else {
            tempString += letters[x];
        }
    }

    return tempString;
}
console.log(toLower("ThEbEsTBoWlInGPlAcEevEr"));