let array = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
let newArray= []
function onceOver(input){
    return input.filter((n)=>{
        if (newArray.indexOf(n) ===-1){
            newArray.push(n)
            return newArray
        }
    })
}

console.log(onceOver(array));

//input: [1, 12, 2, 33, 28, 5, 45, 12, 1, 42, 42, 5]
//expected output: [1,2,5,12,28,33,42]

let sorrtArray = [1, 12, 2, 33, 28, 5, 45, 12, 1, 42, 42, 5]

function onceOverAndSort(input){
    let newerArray= []
     input.filter((n)=>{
        if (newerArray.indexOf(n) ===-1){
            newerArray.push(n)
            return newerArray
        }
    })
newerArray.sort((a,b)=>a-b)
    return newerArray;
}
console.log(onceOverAndSort(sorrtArray));
