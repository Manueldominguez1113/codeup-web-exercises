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