// write a function that counts the number of duplicate characters.
let  input= "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

 function dups (input){
let newArray = input.split('');
     // newArray.sort((a,b)=>a-b)
let newObj={}
     let count={};
   newArray.map((ltr)=> {
       {count[ltr]=(count[ltr]||0)+1}

       if(count[ltr] >1){
       {newObj[ltr] = (newObj[ltr] || 1) + 1}
    }
   })

     return newObj
}

console.log(dups(input))



let sorrtArray = [1, 12, 2, 33, 28, 5, 45, 12, 1, 42, 42, 5];
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
console.log(onceOverAndSort(sorrtArray))