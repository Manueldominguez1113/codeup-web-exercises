let weather = prompt("what is the weather like today?", "");
let ourParagraph = document.getElementById('textContent');
switch(weather){
    case 'rainy':
        ourParagraph.textContent = "today it is rainy, enjoy the weather!"
        break;
    case 'cloudy':
        ourParagraph.textContent = "today it is cloudy. maybe it'll rain?"
        break;
    case 'sunny':
        ourParagraph.textContent = "today it is sunny. lets go outside!"
        break;
    case 'cold':
        ourParagraph.textContent = "today it is cold. maybe take a warm jacket!"
        break;
    case 'warm':
        ourParagraph.textContent = "its warm outside today. lets go to the beach!"
        break;
    case 'hail':
        ourParagraph.textContent = "its hailing!! stay inside!"
        break;
    case 'tornadoes':
        ourParagraph.textContent = "a TORNADO??? take cover!"
        break;
    default:
        ourParagraph.textContent = "sorry, I did not understand the input!"
}
