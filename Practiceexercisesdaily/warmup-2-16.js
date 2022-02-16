// Write a function that places all negative integers at the end of an array.
let input= [-2,5,8,-3,3,5,-9,6]
// Expected output: [5,8,3,5,6,-2,-3,-9]

function sort(inp){
// return    inp.sort((a,b)=> b-a)
   inp.forEach((num,ind)=>
    {
        if (Math.sign(num)===-1) {
        inp.splice(ind,1)
        inp.push(num)
        }
    })
    return inp
}
console.log(sort(input))