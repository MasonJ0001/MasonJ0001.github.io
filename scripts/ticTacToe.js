let xTurn = true;

function changeMark(buttonId) {
    let currentMark = document.getElementById(buttonId).innerHTML;
    if (!currentMark) { 
    
        if (xTurn) {
        document.getElementById(buttonId).innerHTML = "X";
        document.getElementById(buttonId).style.color = "red";
        document.getElementById(buttonId).style.fontSize = "40px";
        // TODO: Set X color
        } 
        else {
        document.getElementById(buttonId).innerHTML = "O";
        document.getElementById(buttonId).style.color = "green";
        document.getElementById(buttonId).style.fontSize = "40px";
        // TODO: Set O color
        }

        xTurn = !xTurn; 
        if (xTurn) {
            document.getElementById('whosNext').innerHTML = "It's X's Turn";
        }
        else{
            document.getElementById('whosNext').innerHTML = "It's O's Turn";
        }


        checkWin(); 
    }
}

function checkWin() {

    let a1 = document.getElementById("a1").innerHTML; 
    let b1 = document.getElementById("b1").innerHTML; 
    let c1 = document.getElementById("c1").innerHTML; 
    let a2 = document.getElementById("a2").innerHTML; 
    let b2 = document.getElementById("b2").innerHTML; 
    let c2 = document.getElementById("c2").innerHTML; 
    let a3 = document.getElementById("a3").innerHTML; 
    let b3 = document.getElementById("b3").innerHTML; 
    let c3 = document.getElementById("c3").innerHTML; 
    // TODO: Retrieve the marks from the remaining buttons
    
    // X Wins
    if (a1 == b1 && b1 == c1 && a1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    // TODO: Inform the player that X wins on the page 
    }
    else if (a2 == b2 && b2 == c2 && a2 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (a3 == b3 && b3 == c3 && a3 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (a1 == a2 && a2 == a3 && a1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (b1 == b2 && b2 == b3 && b1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (c1 == c2 && c2 == c3 && c1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (a1 == b2 && b2 == c3 && a1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }
    else if (c1 == b2 && b2 == a3 && c1 == "X") {
        document.getElementById('winner').innerHTML = "X Wins!";
    }

    else if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    // TODO: Inform the player that O wins on the page 
    }
    else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (a1 == a2 && a2 == a3 && a1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (b1 == b2 && b2 == b3 && b1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (c1 == c2 && c2 == c3 && c1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    else if (c1 == b2 && b2 == a3 && c1 == "O") {
        document.getElementById('winner').innerHTML = "O Wins!";
    }
    
    // TODO: Complete the logic for the remaining win possibilities
}

function resetGame() {
    // Row 1
    document.getElementById("a1").innerHTML = ""; 
    document.getElementById("b1").innerHTML = ""; 
    document.getElementById("c1").innerHTML = "";
    // Row 2
    document.getElementById("a2").innerHTML = ""; 
    document.getElementById("b2").innerHTML = ""; 
    document.getElementById("c2").innerHTML = "";
    // Row 3
    document.getElementById("a3").innerHTML = ""; 
    document.getElementById("b3").innerHTML = ""; 
    document.getElementById("c3").innerHTML = "";

    document.getElementById('winner').innerHTML = "";
    // TODO: Clear the remaining buttons
}