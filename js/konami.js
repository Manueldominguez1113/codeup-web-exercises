"use strict";

let code = $("#code");
let trueCode = ""
$(document).keyup(function (event) {
    if (event.keyCode !== 13) {
        trueCode += event.keyCode;
        switch (event.key) {
            case("ArrowUp"):
                code.append('<img src="../assets/directionals/up.png" alt="input" width="150" height="150">');
                break;
            case("ArrowDown"):
                code.append('<img src="../assets/directionals/down.png" alt="input" width="150" height="150">');
                break;
            case("ArrowLeft"):
                code.append('<img src="../assets/directionals/left.png" alt="input" width="150" height="150">');
                break;
            case("ArrowRight"):
                code.append('<img src="../assets/directionals/right.png" alt="input" width="150" height="150">');
                break;
            case("b"):
                code.append('<img src="../assets/directionals/B.png" alt="input" width="150" height="150">');
                break
            case("a"):
                code.append('<img src="../assets/directionals/A.png" alt="input" width="150" height="150">');
                break;
            default:
                code.append('<img src="../assets/directionals/X.png" alt="input" width="150" height="150">');

        }


        console.log(event.keyCode);
    }
});

$(document).keypress(function (event) {
    if (event.keyCode === 13) {
        if (trueCode === "38384040373937396665") {
            code.html("")
            trueCode = ""
            $('body').addClass("win").removeClass("lose")
            alert("you have gained 30 lives!!");
        } else {
            code.html("")
            trueCode = ""
            $('body').addClass("lose").removeClass("win")
            alert("Wrong code! try again");
        }
    }
})
