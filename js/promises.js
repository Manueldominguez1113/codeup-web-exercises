let user= document.getElementById('user');
let token = document.getElementById('token');
let submit = document.getElementById("submit");

// example using my info will not work while my token is on ignore.
fetch("https://api.github.com/users/Manueldominguez1113/events",{headers: {'Authorization': `token ${Personal_Git_token}`}}).then(n=>
    n.json()).then(n=> {
    console.log(n);
    document.getElementById('event').innerText = n[0].created_at; // ..ill clean this up when i have more time..
})


function getPersonAuth(){
    fetch(`https://api.github.com/users/${user.value}/events`, {headers: {'Authorization': `token ${token.value}`}}).then(n=> n.json()
    ).then(n=> {
        console.log(n);
        console.log(n[0].created_at);
    })
}
function getPersonFree(){
    fetch(`https://api.github.com/users/${user.value}/events`).then(n=> n.json()
    ).then(n=> {
        console.log(n);
        console.log(n[0].created_at);
    })
}
submit.addEventListener("click", ()=>{
    if(token.value === ''){getPersonFree()}else{getPersonAuth()}
})

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// -----------------------------------------------------------------------
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.
function seconds(time){
     let message = `you'll see this after ${time / 1000}`
    console.log(message)
}
function wait(time){
    return setTimeout(()=>seconds(time),[time])
}
wait(5000);