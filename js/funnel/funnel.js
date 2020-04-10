// Variables

const chatBox = document.getElementById('chatBox');
let welcomeBanner = document.getElementById('welcomeBanner');
const playGameCTA = document.getElementById('playGameCTA');
const claimPrizeCTA = document.getElementById('claimPrizeCTA');
const levelOne = document.getElementById('levelOne');
const levelTwo = document.getElementById('levelTwo');
const levelThree = document.getElementById('levelThree');
const peoplePlay = document.getElementById('peoplePlaying');
const loadingPanel = document.getElementById('loadingPanel');
const congratsClaimPrize = document.getElementById('congratsClaimPrize');

// Function to hide WELCOME module on click with transition effect

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
		// Hide Level 1 popup
		levelOne.style.display = 'none';
	} else if (clickCounter == 12) {
		// Show peoplePlaying popup
		peoplePlaying.style.display = 'block';
	} else if (clickCounter == 15) {
		// Hide peoplePlaying popup
		peoplePlaying.style.display = 'none';
	} else if (clickCounter == 20) {
		// Show Level 2 popup
		levelTwo.style.display = 'block';
	} else if (clickCounter == 22) {
		// Hide Level 2 popup
		levelTwo.style.display = 'none';
	} else if (clickCounter == 27) {
		// Show Level 3 popup & loading bar & chat bot
		levelThree.style.display = 'block';
		loadingPanel.style.display = 'block';
		loadingBarMove();
		showChatBot();
	}
});

// Function to trigger the moving of the loading bar

function loadingBarMove() {
	var elem = document.getElementById('myBar');
	var width = 1;
	var id = setInterval(frame, 180);
	function frame() {
		if (width >= 100) {
			showCongratsClaimPrize();
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
}

// Function to show the chat bot

function showChatBot() {
	chatBox.classList.add('position-center');
}

// Function to show the final claim prize popup

function showCongratsClaimPrize() {
	levelThree.style.display = 'none';
	loadingPanel.style.display = 'none';
	chatBox.classList.remove('position-center');
	congratsClaimPrize.style.display = 'block';
}

/* Function to open designated link in a new tab.
This is due to the game overlaying the <a href="#.."> links making them not work. There's always a way ;) */

function openLinkInNewTab() {
	window.open('https://www.google.com', '_blank');
}

claimPrizeCTA.addEventListener('click', openLinkInNewTab);
