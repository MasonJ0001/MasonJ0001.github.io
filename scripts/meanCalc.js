let values = []; 

function addValue() {
    let input = parseFloat(document.getElementById('input').value);
    if (input >= 0 || input <= 0) {
        values.push(input);
        document.getElementById("values").innerHTML = values.join(", ");
        meanCalc();
    }
    else {
        alert('Not a valid input.');
    }
    
    
}

function removeValue() {
    let input = parseFloat(document.getElementById('input').value);
    if (input >= 0 || input <= 0) {
        let num;
        for (let value of values) {
            if (value == input) {
                num = input;
            }
        }
        if (num == input) {
            let inputDex = values.indexOf(input);
            values.splice(inputDex, 1);
            document.getElementById("values").innerHTML = values.join(", ");
            meanCalc();
        }
        else {
            alert("That value is not present.");
        }
        
    }
    else {
        alert('Not a valid input');
    }
    
}

let mean = 0;

function meanCalc() {
    mean = 0;
    let i = 0;
    for (i = 0; i < values.length; i++) {
        mean += values[i];
    }
    mean = mean / i;
    
    document.getElementById("mean").innerHTML = mean;
}