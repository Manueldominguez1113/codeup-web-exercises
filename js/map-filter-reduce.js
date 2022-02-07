const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let bilingual = users.filter(n => n.languages.length >= 3);

console.log(bilingual)

//  Use .map to create an array of strings where each element is a user's email address
let email = users.map(n => n.email);
console.log(email)

//  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience
}, 0)
console.log(totalExp)

//  Use .reduce to get the longest email from the list of users.
function findLongestEmail() {
    return users.reduce(function (previousValue, currentValue) {
        if (currentValue.email.length > previousValue.email.length) {
            return currentValue;
        } else {
            return previousValue;
        }
    });
}

console.log(findLongestEmail())

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const lists = users.reduce((previousValue, user) => {
    x = user.name
    previousValue.push(x);
    return previousValue;
}, []);

console.log(lists);

console.log("bonus-->")
let languages = users.map(user=>user.languages.concat()).reduce((total, lang)=> {return total.concat(lang)},[])
let finalListLang=languages.filter((languag,ind)=> languages.indexOf(languag)===ind)
console.log(finalListLang)

console.log("----------------------------------------------- practice extra exercises below -----------------------------------------------");

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];
// -------------------------------------

// Create an array of the first letters of each fruit
let firstArray = fruits.reduce((prev, curr) => {
    curr.split("")
    prev.push(curr[0])
    return prev
}, [])
console.log(firstArray)  //cute. I didn't even notice the letters till I logged it. made me laugh.

// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

let newUsers = customers.map(n => [n.name, n.age])
console.log(newUsers)

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects
let civilServant = customers.filter(n => {
    return n.occupation.indexOf("Police Officer") !== -1 || n.occupation.indexOf("Teacher") !== -1

})
console.log(civilServant)

// Determine the average age of all the customers
let totalAge = customers.reduce((total, person) => {
    return total + person.age;
}, 0)

let avgAge = (totalAge / customers.length)

console.log(avgAge);

// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
/*{
    name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
    age: THE_TOTAL_OF_ALL_PET_AGES,
    breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
}*/

function makeSuperPet() {
    let superPet = {};
    superPet.name = pets.reduce((names, pet) => {
        return names + pet.name
    }, '')
    superPet.age = pets.reduce((total, pet) => {
        return total + pet.age
    }, 0)
    let breedArray = pets.reduce((superBreed, pet) => {
        pet.breed.split("")
        superBreed.push(pet.breed[0])
        return superBreed
    }, [])
    superPet.breed = breedArray.join()
    return superPet
}

console.log(makeSuperPet());
//Create a function that takes in an array of pets and returns an array of the length of first names for pugs only. Your output for the given input should be [3, 6] for 'Bud' and 'Bowser'
function pugNames(){
    let pugs= pets.filter((pet)=>{
         return pet.breed.indexOf("Pug") !==-1
    })
    return pugs.map(pet=> pet.name)
}
console.log(pugNames())
// Create a function getFemaleFamilyMembers() that when given the family variable as an argument, returns an array of female family member names
function getFemaleFamilyMembers(input){
 let members= input.filter((person)=>{
        return person.gender.indexOf("female") !==-1
    })
    return members.map((person)=> person.name)
}
 console.log(getFemaleFamilyMembers(family))

// Create a function makeLongPetString() that when given the variable of pets, returns a string of all property values with dashes separating each property value
function makeLongPetString(input){
    return input.map(pet=>`${pet.name}-${pet.breed}-${pet.age}`).join('-')
}
console.log(makeLongPetString(pets))
// Create a function that when given an array of first names, returns an array of the same names with a last name of Smith
        fam = ['Sally', 'Fred', 'Steve']

function lastName(input){
    return input.map(person=>person.concat(' Smith'))
}
console.log(lastName(fam));

// Create a function that when given an array of numbers, return the sum of the even numbers
function evenNum(input){
    return input.filter(num=> num%2 ===0).reduce((total,number)=>total+number)
}
let numbers=[1,2,3,4,5,6,7,8,9,10]

console.log(evenNum(numbers));
// Create a function that when given an array of numbers, return the sum of all numbers evenly divisible by 10
function byTenSum(input){
    return input.filter(num=> num%10 ===0).reduce((total,number)=>total+number)
}
let tens=[10,10,30,40,43,44]
console.log(byTenSum(tens));
// Create a function that when given an array of names, return a string of all the first letters of each name
function firstLetters(input){
    return input.reduce((prev, curr) => {
        curr.split("")
        prev.push(curr[0])
        return prev
    }, [])
}
let nameList= ['Lacey', 'Oscar', 'Vermilla', 'Eevee', 'Robert', 'Samuel']
console.log(firstLetters(nameList))

// Create a function that when given an array of values, returns an array of only the truthy values
let values= [1,true, false, 0, -1]
function truthy(input){return input.filter(n=> n == true)}
console.log(truthy(values))
// Create a function that when given an object, returns the property values as an array of elements
let object={id: 1, name:"Alex", age: 27}
function intoArray(input){
    return Object.values(input);
}
console.log(intoArray(object));
// Create a function that when given an object, returns the property values as an array of elements
// literally the same question as the one above.
// Create a function that when given three arguments: a min num, a max num, an array of nums will return the array of nums that are only between the min and max values, inclusive
let min= 1;
let max=10;
let numberArray=[2,3,6,7,9,11,13,15,17,20];     // change numbers here as needed or the min max to prove my work

function numbersBetween(min, max, numberList){return numberList.filter(n=>  n > min && n < max)}

console.log(numbersBetween(min,max,numberArray));
// Create a function that when given an array of strings, returns an array of objects with properties
// for the given string value and the length of the string and the string without vowels (not including y)
// so like.. {string:"daisy", length:'5', novow:"dsy"}
let strings = ["daisy", "rocky","pickle"]
function stringToObject(input){
    let arrayOfObj=[]
    let newStrin=[]
    return input.map(strin=> arrayOfObj={
        string:strin,
        length:strin.length,
        novow: strin.split('').map((ltr,ind)=> {
           return ltr.replace(/[aeiou]/ig,'')}).join('')
    })
}
console.log(stringToObject(strings));
