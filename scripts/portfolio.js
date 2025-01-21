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