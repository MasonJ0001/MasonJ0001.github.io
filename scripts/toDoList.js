function escapeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

let list = {};

let j;
function displayListItem(event) {
    event.preventDefault();
    
    j = parseInt(localStorage.getItem('jValue'));
    if (isNaN(j)) {
        localStorage.setItem('jValue', 0);
    }
    j = parseInt(localStorage.getItem('jValue'));
    let userInput = document.getElementById("listInput").value;
    let listDiv = document.getElementById("list");

    let newItem = document.createElement("p");
    newItem.innerHTML = escapeHTML(userInput);
    listDiv.appendChild(newItem);
    Object.defineProperty(list, "item" + j, {configurable:true});
    Object.defineProperty(list, "item" + j, {value : listDiv.innerHTML});
    console.log(list);
    localStorage.setItem('toDoList', JSON.stringify(list));
    j++;
    localStorage.setItem('jValue', j);
    


    // localStorage.setItem('toDoList', listDiv.innerHTML);
    // console.log(localStorage.getItem('toDoList'));

}

function removeListItem(event) {
    event.preventDefault();
    let listDiv = document.getElementById("list");
    listDiv.lastElementChild.remove();
    j--;
    
    delete list['item' + j];
    
    localStorage.setItem('toDoList', JSON.stringify(list));
    localStorage.setItem('jValue', j);

    
}

function loaded() {
    console.log('hey');
    let listDiv = document.getElementById("list");
    let theList = localStorage.getItem('toDoList');
    JSON.parse(theList);
    console.log(theList);
    listDiv.innerHTML = JSON.parse(localStorage.getItem('toDoList'));
}

// themes
function dark() {
    document.getElementById('mode').innerHTML = "Current Mode: Dark";
    document.getElementById('pageBody').style = "background-color: #000000";
    document.getElementById('pageBody').style.color = "white";
    document.getElementById('pageHeader').style.color = "white";
    document.getElementById('inputTitle').style.color = "white";
    document.getElementById('pageForm').style.color = "white";
    document.getElementById('listTitle').style.color = "white";
    document.getElementById('list').style.color = "white";
    document.getElementById('mode').style.color = "white";
}

function light() {
    document.getElementById('mode').innerHTML = "Current Mode: Light";
    document.getElementById('pageBody').style = "background-color: white";
    document.getElementById('pageBody').style.color = "black";
    document.getElementById('pageHeader').style.color = "black";
    document.getElementById('inputTitle').style.color = "black";
    document.getElementById('pageForm').style.color = "black";
    document.getElementById('listTitle').style.color = "black";
    document.getElementById('list').style.color = "black";
    document.getElementById('mode').style.color = "black";
}