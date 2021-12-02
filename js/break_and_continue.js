// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input
// prompt, odd 1-50,
// loop&break on invalid

function promp(skip) {


    for(skip=false;(!(skip%2===1)); skip=prompt("pick an odd number between 1 and 50","")){
        /*if(skip%2===1){
            break;
        }*/     // redundant.
    }
    skip = parseInt(skip);
/*    while (!(skip % 2 !== 0)) {               /working code, but wanted to try a "for" loop...
        let skip1 = prompt("pick an odd number between 1 and 50", "i.e: 3, 1, 5...");
        skip = parseInt(skip1)
    }*/
    return skip;
};
//  console.log(promp());

function oddSkip(skip) {
    console.log("number to skip is:" + skip)
    for (let i = 1; i < 50; i++) {
        if (i === skip) {
            console.log("yikes! skipping " + i + "...");
            continue;
        }
        if (i % 2 === 1) {
            console.log("this is an odd number: " + i);
        }
    }
};

oddSkip(promp());

/*function prompcheck(skip){
    if(skip !== undefined){
        return skip;
    }else do{
        prompcheck(promp());
    } while(skip == undefined);
};
console.log(prompcheck());
*/

/*
    function errorprmpt(skip){
        while (skip) {
            alert("wrong! pick a number!");
            errorprmpt(promp());
    }
    return true;
    };

    function oddprmpt(skip){
        while (skip == "fail") {
            oddprmpt(promp());
        }
        console.log(skip);
        return true;
    }

oddprmpt(promp());*/
