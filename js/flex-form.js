let Videos=["australian-cattle-dog-pups1", "austrialian-cattle-dogs-2", "joyful-siblings-running-through-green-grassy-field-SBV-315182944-preview"];
let puppy = document.getElementById("puppy");

function randomVid(){

  let vid= Math.floor(Math.random()*3);
  return  puppy.src = "cover/"+ Videos[vid] +".mp4"
}
randomVid();
