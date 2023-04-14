// Exercise 7
let fName = document.getElementById("fName")
let fEmail = document.getElementById("fEmail")
let fAddress = document.getElementById("fAddress")
let fLastN = document.getElementById("fLastN")
let fPassword = document.getElementById("fPassword")
let fPhone = document.getElementById("fPhone")
const inputs = document.querySelectorAll('#form input');

inputs.forEach((input) => {
	input.addEventListener('keyup', validate);
	input.addEventListener('blur', validate);
});

function validate(e) {
	/* var error = 0; */
	// Get the input fields
	/* var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail"); */

	// Get the error elements
	/* var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");   */
	
	// Validate fields entered by the user: name, phone, password, and email

	if(e == undefined){
		validateInput(expressions.name, fName)
		validateInput(expressions.email, fEmail)
		validateInput(expressions.address, fAddress)
		validateInput(expressions.name, fLastN)
		validateInput(expressions.password, fPassword)
		validateInput(expressions.phone, fPhone)

	} else {
		switch (e.target.id) {
			case "fName":
				validateInput(expressions.name, fName)
			break;
			case "fEmail":
				validateInput(expressions.email, fEmail)
			break;
			case "fAddress":
				validateInput(expressions.address, fAddress)
			break;
			case "fLastN":
				validateInput(expressions.name, fLastN)
			break;
			case "fPassword":
				validateInput(expressions.password, fPassword)
			break;
			case "fPhone":
				validateInput(expressions.phone, fPhone)
			break;
		}
	}
}

 const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{3,14}$/, // Letters and spaces can carry accents.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	address: /^[a-zA-ZÀ-ÿ\s0-9\_\-]{3,30}$/, // Letters, numbers, hyphen and underscore
	password: /^.{4,8}$/, // 4 to 8 digits.
	phone: /^\d{9,14}$/ // 9 to 14 numbers.
}

function validateInput(regExpression, input){
	if(regExpression.test(input.value)){
		styleValid(input)
	} else {
		styleInvalid(input)
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
})

function styleValid(input){
	document.getElementById(input.id).classList.remove('is-invalid');
	document.getElementById(input.id).classList.add('is-valid');
	switch (input) {
		case "fName":
			document.getElementById('errorName').classList.remove('invalid-feedback-active');
			document.getElementById('errorName').classList.add('invalid-feedback');
		break;
		case "fEmail":
			document.getElementById('errorEmail').classList.remove('invalid-feedback-active');
			document.getElementById('errorEmail').classList.add('invalid-feedback');
		break;
		case "fAddress":
			document.getElementById('errorAddress').classList.remove('invalid-feedback-active');
			document.getElementById('errorAddress').classList.add('invalid-feedback');
		break;
		case "fLastN":
			document.getElementById('errorLastN').classList.remove('invalid-feedback-active');
			document.getElementById('errorLastN').classList.add('invalid-feedback');
		break;
		case "fPassword":
			document.getElementById('errorPassword').classList.remove('invalid-feedback-active');
			document.getElementById('errorPassword').classList.add('invalid-feedback');
		break;
		case "fPhone":
			document.getElementById('errorPhone').classList.remove('invalid-feedback-active');
			document.getElementById('errorPhone').classList.add('invalid-feedback');
		break;
	}
}
function styleInvalid(input){
	document.getElementById(input.id).classList.add('is-invalid');
	switch (input) {
		case "fName":
			document.getElementById('errorName').classList.remove('invalid-feedback');
			document.getElementById('errorName').classList.add('invalid-feedback-active');
		break;
		case "fEmail":
			document.getElementById('errorEmail').classList.remove('invalid-feedback');
			document.getElementById('errorEmail').classList.add('invalid-feedback-active');
		break;
		case "fAddress":
			document.getElementById('errorAddress').classList.remove('invalid-feedback');
			document.getElementById('errorAddress').classList.add('invalid-feedback-active');
		break;
		case "fLastN":
			document.getElementById('errorLastN').classList.remove('invalid-feedback');
			document.getElementById('errorLastN').classList.add('invalid-feedback-active');
		break;
		case "fPassword":
			document.getElementById('errorPassword').classList.remove('invalid-feedback');
			document.getElementById('errorPassword').classList.add('invalid-feedback-active');
		break;
		case "fPhone":
			document.getElementById('errorPhone').classList.remove('invalid-feedback');
			document.getElementById('errorPhone').classList.add('invalid-feedback-active');
		break;
	}
}

