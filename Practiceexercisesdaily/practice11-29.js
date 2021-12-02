function reverseString(string) {
    return string.split("").reverse().join("");
}

console.log(reverseString("hi my name is what"))


// how would you drees depending on the weather sunny rainy snowy

// if switch dress
//case rainy raincoat break
// case snowy coat break
// default(id default this to sunny) tshirt
/*
A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -*/

/*
function grading(score) {
    parseInt(score);
    if (score >= 90) {
        return "A";
    }
    if (score > 80 && score < 89) {
        return "B";
    }
    if (score > 70 && score < 79) {
        return "C";
    }
    if (score > 60 && score < 69) {
        return "D";
    } else {
        return "F";
    }
}
console.log("i got an ", grading(100));
console.log("i got an ", grading(86));
console.log("i got an ", grading(72));
console.log("i got an ", grading(65));
console.log("i got an ", grading(30));
*/

/*
function grading(score) {
    parseInt(score);
    let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
    return grade
}
console.log("i got an ", grading(100));
console.log("i got an ", grading(86));
console.log("i got an ", grading(72));
console.log("i got an ", grading(65));
console.log("i got an ", grading(30));
*/


function grading(score) {
    parseInt(score);
    switch(true) {
        case (score>=90) :
            return "A";
            break;
        case (score >= 80) :
            return "B";
            break;
        case (score >= 70) :
            return "C";
            break;
        case (score >= 60) :
            return "D";
            break;
        default :
            return "F";
            break;
    }
}
console.log("i got an ", grading(100));
console.log("i got an ", grading(86));
console.log("i got an ", grading(72));
console.log("i got an ", grading(65));
console.log("i got an ", grading(30));
