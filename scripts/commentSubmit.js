
// Username validation
document.getElementById('username').addEventListener('input', function() {
    
    let username = this.value;

    let problem = [];

    if (username.length < 2)
        problem.push('2-character minimum');

    if (username.length > 10)
        problem.push('10-character maximum');

    let output = "";

    if (problem.length != 0) {
        output = "<strong>Problem: </strong>";
        output += problem;
    }

    document.getElementById('userProblems').innerHTML = output;
});

// Password validation
document.getElementById('password').addEventListener('input', function() {
    
    let password = this.value;
			
	console.log(password);

	const missing = [];

	if (password.length < 10) {
	    missing.push('8-character minimum');
	}

	let hasLower = /[a-z]/.test(password);
	if (!hasLower)
		missing.push("lower-case letter");

	let hasUpper = /[A-Z]/.test(password);
	if (!hasUpper)
		missing.push("upper-case letter");

	let hasNumber = /[0-9]/.test(password);
	if (!hasNumber)
		missing.push("number");

	let hasSpecial = /[!@#$%]/.test(password);
	if (!hasSpecial)
		missing.push("special character (!, @, #, $, %)");

	let output = "";

	if (missing.length > 0) {
		output = "<strong>Missing: </strong>";
			for (let i = 0; i < missing.length - 1; i++)
				output += missing[i] + ", ";
			output += missing[missing.length - 1];
	}

    document.getElementById('passProblems').innerHTML = output;
});

function clean(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function sanitize(event) {
    event.preventDefault();

    console.log('Something happened')

    let name = document.getElementById("name").value;
    name = clean(name);
    let phone = document.getElementById("phone").value;
    phone = clean(phone);
    let email = document.getElementById("email").value;
    email = clean(email);
    let username = document.getElementById("username").value;
    username = clean(username);
    let password = document.getElementById("password").value;
    password = clean(password);
}