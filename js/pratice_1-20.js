/*
TODO:write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
TODO:input example: "bJIENsdfRAIRVIrsRFAijgRar"*/
let input = "bJIENsdfRAIRVIrsRFAijgRar"

function caseChecker(){
    let search =input.split("");
    search.forEach(function(letter){
      if (letter ===letter.toUpperCase()){
          console.log(letter+" is uppercase!")
      } else if(letter === letter.toLowerCase()){
            console.log(letter+" is lowercase!")
      } else{
          console.log(letter+" is not a letter!")
      }

    })
}

//caseChecker();

function fizzbuzz(){
    for (let i=1; i< 20; i++){
        if (i%3===0&&i%5===0){
            console.log(i+ ": fizzbuzz!")
        } else if(i%3===0){
            console.log(i+ ": fizz");
        } else if (i%5===0){
            console.log(i+": buzz");
        } else console.log(i)
    }
}
fizzbuzz();
//testfff