// Main Page
function Default() {
    document.getElementById('mode').innerHTML = "Current Mode: Default";
    document.getElementById('pageBody').style = "background-color: #3b3b3b";
    document.getElementById('pageTitle').style = "background-color: #3b3b3b";
    document.getElementById('pageTitle').style.color = "black";
    document.getElementById('mainParagraph').style = "background-color: black";
    document.getElementById('mainParagraph').style.color = "white";
    document.getElementById('subParagraph').style = "background-color: #3b3b3b";
    document.getElementById('subParagraph').style.color = "black";
}

function Dark() {
    document.getElementById('mode').innerHTML = "Current Mode: Dark";
    document.getElementById('pageBody').style = "background-color: #000000";
    document.getElementById('pageTitle').style = "background-color: #000000";
    document.getElementById('pageTitle').style.color = "white";
    document.getElementById('mainParagraph').style = "background-color: black";
    document.getElementById('mainParagraph').style.color = "white";
    document.getElementById('subParagraph').style = "background-color: #000000";
    document.getElementById('subParagraph').style.color = "white";
}

function Light() {
    document.getElementById('mode').innerHTML = "Current Mode: Light";
    document.getElementById('pageBody').style = "background-color: white";
    document.getElementById('pageTitle').style = "background-color: white";
    document.getElementById('mainParagraph').style = "background-color: gray";
    document.getElementById('mainParagraph').style.color = "black";
    document.getElementById('subParagraph').style = "background-color: white";
}

// Shape Calculator
function circumference() {
    let r = parseFloat(document.getElementById('radius1').value);
    let result = 2 * (Math.PI) * r;
    document.getElementById("circumferenceResult").innerHTML = result;
}

function area() {
    let r = parseFloat(document.getElementById('radius1').value);
    let result = (Math.PI) * ((r)**2);
    document.getElementById("areaResult").innerHTML = result;
}

function volume() {
    let r = parseFloat(document.getElementById('radius2').value);
    let result = (4/3) * (Math.PI) * ((r)**3);
    document.getElementById("volumeResult").innerHTML = result;
}