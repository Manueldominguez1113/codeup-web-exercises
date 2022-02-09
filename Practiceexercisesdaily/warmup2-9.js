// write a function that takes a string as argument and returns the number of vowels contained in that string.
// The vowels are “a”, “e”, “i”, “o”, “u”.
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter
let count=0;
function vowelCount(input){
    input.toLowerCase().split('').map(ltr=>{
        let boolean = ltr === 'a'||ltr === 'e'||ltr === 'i'||ltr === 'o'||ltr === 'u'
        if(boolean ===true){
          count++
        }
    }).join('')

    console.log(input+" has "+count+" vowel(s) in the word");
}

vowelCount("apple");