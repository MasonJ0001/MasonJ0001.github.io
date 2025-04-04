function escapeHTML(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

let list = {}; // = JSON.parse(localStorage.getItem('toDoList'));

let j;
function displayListItem(event) {
    event.preventDefault();
    
    

    let userInput = document.getElementById("listInput").value;
    let listDiv = document.getElementById("list");

    let newItem = document.createElement("p");
    newItem.innerHTML = escapeHTML(userInput);
    listDiv.appendChild(newItem);
    Object.defineProperty(list, "item" + j, {configurable:true});
    Object.defineProperty(list, "item" + j, {enumerable:true});
    Object.defineProperty(list, "item" + j, {value : listDiv.innerHTML});
    console.log(list);
    localStorage.setItem('toDoList', JSON.stringify(list));
    console.log(localStorage.getItem('toDoList'));
    j++;
    localStorage.setItem('jValue', j);
    console.log(j);
    sessionIncrement();


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
    console.log(localStorage.getItem('toDoList'));
    localStorage.setItem('jValue', j);

    
}

function loaded() {

    console.log('hey');
    let listDiv = document.getElementById("list");
    let theList = localStorage.getItem('toDoList');
    j = parseInt(localStorage.getItem('jValue'));
    if (isNaN(j)) { //isNaN(j)
        localStorage.setItem('jValue', 0);
    }
    j = parseInt(localStorage.getItem('jValue'));
    console.log(localStorage.getItem('jValue'));
    
    let testList = JSON.parse(theList);
    console.log(testList !== null);
    console.log(testList);

    if (testList !== null) {
        list = JSON.parse(theList);
        console.log(list);
        j = parseInt(localStorage.getItem('jValue'));
        console.log(list.item0)
        let listItem = "item" + (j - 1);
        console.log(listItem);
        console.log(list[listItem]);
        console.log(list['item0']);
        listDiv.innerHTML = (list[listItem]);
    }

    let sestorage = sessionStorage.getItem('increment');
    console.log(sestorage);
    if (sestorage !== null) {
        increment = parseInt(sessionStorage.getItem('increment'));
        console.log(increment);
        document.getElementById('sessionIncrement').innerHTML = increment;
    }
        
    getQuote();

    // localStorage.clear();
}

let increment = 0;
function sessionIncrement() {
    increment++;
    sessionStorage.setItem('increment', increment);
    document.getElementById('sessionIncrement').innerHTML = increment;
}

async function getQuote() {
    try {
        let response = await fetch('https://api.quotable.io/random');
       let data = await response.json();
        console.log(data);
        document.getElementById('quote').innerHTML = '"' + data.content + '"';
        document.getElementById('author').innerHTML = data.author;
        
    }
    catch (error) {
        // TODO: add actual error message on page
        console.log('Error fetching the quote.');
    }
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