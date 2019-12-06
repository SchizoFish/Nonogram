let correctArray = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
];
let guessArray = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];


function buttonBlack(_this, x, y) {

    if (_this.style.backgroundColor != "black") {
        _this.style.backgroundColor = "black";
        guessArray[y][x] = 1
    }
    else {
        _this.style.backgroundColor = "white";
        guessArray[y][x] = 0
    }

    var grattis = document.getElementById('congrats');
    grattis.innerHTML = "DÖDSSVÅRT"

}

function check() {
    let counter = 0
    var grattis = document.getElementById('congrats');

    
    for (var i = 0; i < correctArray.length; i++) {

        for (var j = 0; j < correctArray.length; j++) {

            if (correctArray[j][i] !== guessArray[j][i]) {
                counter++
            }
        }
    }

    if (counter > 0) {
        grattis.innerHTML = "FAN!  " + counter + "  FEL . . . ."
    }
    else {
        grattis.innerHTML = "GRATTIS!"
    }
        

}

function uncheck() {
   
}
