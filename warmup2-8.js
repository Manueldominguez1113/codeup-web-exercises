let array = ["phone", "watch", "phone", "camera", "camera", "phone"]
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