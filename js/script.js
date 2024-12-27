"use strict";

// *** Select Elements ***
const paragraphEl = document.getElementById("paragraphEl");
const speedEl = document.getElementById("speed");
const text = "I Love Html, Css, JavaScript ❤️...";

let index = 1;
let speedText = 200 / speedEl.value;

// *** Main Code ***

autoText();

function autoText() {
	paragraphEl.innerText = text.slice(0, index);

	index++;

	if (index > text.length) index = 1;

	setTimeout(autoText, speedText);
}

speedEl.addEventListener("input", (e) => (speedText = 200 / e.target.value));
