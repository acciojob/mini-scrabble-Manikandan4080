//your code here
// let inputElement = document.getElementById("evaluatedText");
// let heading = document.getElementById("letterCount");
// console.log(inputElement);
// heading.innerText = 0;
// inputElement.addEventListener("input", onChange);
// function onChange() {
// 	heading.innerText = inputElement.value.length;
// }

const enteredText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");
letterCount.textContent = 0;
enteredText.addEventListener("input",() => {
	let text = enteredText.value;
	let count =text.length;

	letterCount.textContent=count;
});