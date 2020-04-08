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
const welcome = document.querySelector('.welcome');

okidokes.addEventListener('click', (e) => {
	// Hide welcome
	e.preventDefault();
	setTimeout(function () {
		welcome.style.display = 'none';
	}, 1000);
});
