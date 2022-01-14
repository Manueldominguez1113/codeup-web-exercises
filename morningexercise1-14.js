/*
Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array
 that contains only those whose name have only 4 letters in them. */

let list = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"]
let newList = []
for (let i=0; i<=list.length;){
    if (list[i].length === 4){
        newList.splice();
        i++;
    }
    else i++
}
console.log(newList);