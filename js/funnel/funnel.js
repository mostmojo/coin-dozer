// Function to hide CHATBOT on click of X button
const xBtn = document.getElementById('xBtn');
const chatBox = document.getElementById('chatBox');

xBtn.addEventListener('click', (e) => {
	// Hide chatbox
	e.preventDefault();
	chatBox.style.display = 'none';
});

// Function to hide WELCOME module on click
const okidokes = document.getElementById('okidokes');
const okidokesTwo = document.getElementById('okidokesTwo');
const welcome = document.querySelector('.welcome');
const levelOne = document.getElementById('levelOne');

okidokes.addEventListener('click', (e) => {
	// Hide welcome
	e.preventDefault();
	setTimeout(function () {
		welcome.style.display = 'none';
	}, 400);
});

okidokesTwo.addEventListener('click', (e) => {
	// Hide level one
	e.preventDefault();
	setTimeout(function () {
		levelOne.style.display = 'none';
	}, 400);
});

// Function to detect number of clicks
var clickCounter = 0;
window.addEventListener('click', function () {
	clickCounter++;
	if (clickCounter == 7) {
		//Open it
		levelOne.style.display = 'block';
	}
});
