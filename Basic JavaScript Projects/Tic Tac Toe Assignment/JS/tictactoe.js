let activePlayer = "X"; // keeps track of whos turn it is

let selectedSquares = []; //array to store the moves done by players

function placeXorO(squareNumber) { //function to place x or o

    if (!selectedSquares.some(element => element.includes(squareNumber))) { //checks if square has been slected before
        let select = document.getElementById(squareNumber); //var thats holds the element of the html that was clicked

        if (activePlayer === "X") { //detemines which player is active and places the x or o
            select.style.backgroundImage = 'url("Images/x.png")';
        } else {
            select.style.backgroundImage = 'url("Images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer); // adds the square number and player to the array

        checkWinConditions(); //calls a function to check if if someone won

        if (activePlayer === "X") { //changes active player
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        audio('./media/place.mp3'); //function to play the place sound effect

        if (activePlayer === "O") { //checks if its the computers turn
            disableClick();
            setTimeout(function () {computersTurn(); }, 1000);
        }

        return true; //returns true for the computerTrun function to work 
    }

    function computersTurn() { //picks a random square for the computers turn
        let success = false;
        let pickASquare;

        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                success = true;
            }
        }
    }
}

function checkWinConditions() { //pasrses the selected squares array and checks if a player has won
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }

    else if (selectedSquares.length >= 9) { //checks for a tie
        audio('./media/tie.mp3'); //plays tie sound effect
        setTimeout(function() { resetGame(); }, 500); //resets the game
    }

    function arrayIncludes(squareA, SquareB, SquareC) { //checks for each win condition
        const a =selectedSquares.includes(squareA)
        const b =selectedSquares.includes(squareB)
        const c =selectedSquares.includes(squareC)

        if (a === true && b === true && c === true) { return true; }
    }
}

function disableClick() { //disables click during the computers turn
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

function audio(audioURL) { //plays the audio file
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //function to draw the line across winning cords
    const canvas = document.getElementById('win-lines');
    const c = canvas.getConttext('2d');

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() { //animates the line drawing on the win cords
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, .8)";
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if ( x < x2 ) { x += 10; }
            if ( y < y2 ) { y += 10; }
            if ( x >= x2 && y >= y2 ) { cancelAnimationFrame(animationLoop);}
        }

        if ( x1 <= x2 && y1 >= y2 ) {
            if ( x < x2 ) { x += 10; }
            if ( y > y2 ) { y -= 10; }
            if ( x >= x2 && y <= y2 ) { cancelAnimationFrame(animationLoop);}
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

function resetGame() { //clears the board and the array to restart the game
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(string(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}