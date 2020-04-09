// Function to hide CHATBOT on click of X button
const xBtn = document.getElementById('xBtn');
const chatBox = document.getElementById('chatBox');

xBtn.addEventListener('click', (e) => {
	// Hide chatbox
	e.preventDefault();
	chatBox.style.display = 'none';
});

// Function to hide WELCOME module on click
let welcomeBanner = document.getElementById('welcomeBanner');
const playGameCTA = document.getElementById('playGameCTA');
const okidokesTwo = document.getElementById('okidokesTwo');
const welcome = document.querySelector('.welcome');
const levelOne = document.getElementById('levelOne');

/* Old code that hides WELCOME module, but without smooth transition.

okidokes.addEventListener('click', (e) => {
	// Hide welcome
	e.preventDefault();
	setTimeout(function () {
		welcome.style.display = 'none';
	}, 400);
});

*/

playGameCTA.addEventListener(
	'click',
	function () {
		if (welcomeBanner.classList.contains('hidden')) {
			welcomeBanner.classList.remove('hidden');
			setTimeout(function () {
				welcomeBanner.classList.remove('visuallyhidden');
			}, 20);
		} else {
			welcomeBanner.classList.add('visuallyhidden');
			welcomeBanner.addEventListener(
				'transitionend',
				function (e) {
					welcomeBanner.classList.add('hidden');
				},
				{
					capture: false,
					once: true,
					passive: false,
				}
			);
		}
	},
	false
);

// Function to hide Level 1 module on click
window.addEventListener('click', (e) => {
	// Hide Level 1
	e.preventDefault();
	setTimeout(function () {
		levelOne.style.display = 'none';
	}, 7000);
});

// Function to detect number of clicks and display the LEVEL 1,2,3 modules accordingly
var clickCounter = 0;
window.addEventListener('click', function () {
	clickCounter++;
	if (clickCounter == 7) {
		//Open it
		levelOne.style.display = 'block';
	} else if (clickCounter == 14) {
		//Open it
		levelOne.style.display = 'block';
	}
});
