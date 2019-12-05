var correctArray = [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0]
];
var guessArray = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];


function buttonBlack(_this, x, y) {

    if (_this.style.backgroundColor != "black") {
        _this.style.backgroundColor = "black";
        guessArray[y][x]=1
    }
    else {
        _this.style.backgroundColor = "white";
        guessArray[y][x] = 0
    }

}

function check() {
    var grattis = document.getElementById('congrats');

    let counter = 0
    for (var i = 0; i < correctArray.length; i++) {

        for (var j = 0; j < correctArray.length; j++) {

            if (correctArray[j][i] !== guessArray[j][i]) {
                counter++
            }
        }
    }

    if (counter > 0) {
        grattis.innerHTML = "FAN! "
    }
    else
        grattis.innerHTML = "GRATTIS!"

}
