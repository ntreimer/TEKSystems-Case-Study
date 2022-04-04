
let myArray = ["footprints! ", "about ", "learn ", "Let's "];
let forLoopArray = ["This ", "message ", "was ", "made ", "in ", "a ", "for ", "loop. "]

function showMessage() {
    if (myArray.length === 0) {
        alert("no more message left!");
    }
    document.getElementById("message-here").append(myArray.splice(myArray.length - 1));
}

function forLoopMessage() {
    for (let i = 0; i < forLoopArray.length; i++) {
        document.getElementById("for-message-here").append(forLoopArray[i]);        
    }
}