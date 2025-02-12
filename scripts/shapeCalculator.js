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