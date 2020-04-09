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
const levelOne = document.getElementById('levelOne');
const levelTwo = document.getElementById('levelTwo');
const levelThree = document.getElementById('levelThree');
const peoplePlay = document.getElementById('peoplePlaying');

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

// Function to detect number of clicks and show/hide the LEVEL 1,2,3 & people-playing popups accordingly

var clickCounter = 0;
window.addEventListener('click', function () {
	clickCounter++;
	if (clickCounter == 7) {
		// Show Level 1 popup
		levelOne.style.display = 'block';
	} else if (clickCounter == 9) {
		levelOne.style.display = 'none';
	} else if (clickCounter == 12) {
		// Show peoplePlaying popup
		peoplePlaying.style.display = 'block';
	} else if (clickCounter == 15) {
		peoplePlaying.style.display = 'none';
	} else if (clickCounter == 20) {
		// Show Level 2 popup
		levelTwo.style.display = 'block';
	} else if (clickCounter == 22) {
		levelTwo.style.display = 'none';
	} else if (clickCounter == 27) {
		levelThree.style.display = 'block';
	}
});
