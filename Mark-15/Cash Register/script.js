var bill = document.querySelector("#bill_amount");
var cash = document.querySelector("#cash_given");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");
const noOfNotes = document.querySelectorAll(".no_of_notes");

btn.addEventListener("click", inputChecker);

const notes = [2000, 500, 100, 50, 20, 5, 1];

function inputChecker() {
	if (bill.value > 0) {
		if (cash.value >= bill.value) {
			const amt = cash.value - bill.value;
			counting(amt);
		} else {
			showMessage("Wanna wash plates?", "red");
		}
	} else {
		showMessage("Please enter the positive bill amount", "blue");
	}
}

function counting(amountToBeReturned) {
	for (let i = 0; i < notes.length; i++) {
		const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
		amountToBeReturned = amountToBeReturned % notes[i];
		noOfNotes[i].innerText = numberOfNotes;
	}
}


function showMessage(msg, color) {
	output.innerText = `${msg}`;
	output.style.color = `${color}`;
}

