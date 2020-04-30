// Variables

const chatBox = document.getElementById("chatBox");
let welcomeBanner = document.getElementById("welcomeBanner");
const playGameCTA = document.getElementById("playGameCTA");
const claimPrizeCTA = document.getElementById("claimPrizeCTA");
const levelOne = document.getElementById("levelOne");
const levelTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");
const peoplePlay = document.getElementById("peoplePlaying");
const nearlyThere = document.getElementById("nearlyThere");
const loadingPanel = document.getElementById("loadingPanel2");
const congratsClaimPrize = document.getElementById("congratsClaimPrize");
const blurry = document.querySelector(".blurry");
const close = document.getElementById("notification-close");
const notifs = document.querySelector(".notification");

// Function to hide WELCOME module and remove blur, on click with transition effect
playGameCTA.addEventListener(
  "click",
  function () {
    if (welcomeBanner.classList.contains("hidden")) {
      welcomeBanner.classList.remove("hidden");
      setTimeout(function () {
        welcomeBanner.classList.remove("visuallyhidden");
      }, 20);
    } else {
      welcomeBanner.classList.add("visuallyhidden");
      welcomeBanner.addEventListener(
        "transitionend",
        function (e) {
          welcomeBanner.classList.add("hidden");
          blurry.classList.remove("blurry");
          setTimeout(function () {
            notifs.classList.remove("visuallyhidden");
          }, 2000);
        },
        {
          capture: false,
          once: true,
          passive: false
        }
      );
    }
  },
  false
);

// Function to detect number of clicks and show/hide the LEVEL 1,2,3 & people-playing popups accordingly
var clickCounter = 0;
window.addEventListener("click", function () {
  clickCounter++;
  if (clickCounter == 33) {
    // Show Level 1 popup
    // levelOne.style.display = "block";
  } else if (clickCounter == 41) {
    // Hide Level 1 popup
    // levelOne.style.display = "none";
  } else if (clickCounter == 12) {
    // Show peoplePlaying popup
    peoplePlaying.style.display = "block";
  } else if (clickCounter == 20) {
    // Hide peoplePlaying popup
    peoplePlaying.style.display = "none";
  } else if (clickCounter == 66) {
    // Show Nearly There popup
    nearlyThere.style.display = "block";
  } else if (clickCounter == 74) {
    // Hide Nearly There popup
    nearlyThere.style.display = "none";
  } else if (clickCounter == 100) {
    // Show Level 3 popup & loading bar & chat bot
    levelThree.style.display = "block";
    levelThree.classList.add("confetti");
    loadingPanel.style.display = "block";
    loadingBarMove2();
    // showChatBot();
  }
});

// Function to trigger the moving of the loading bar
function loadingBarMove2() {
  var elem = document.getElementById("myBar2");
  var width = 1;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      showCongratsClaimPrize();
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

/* Function to show the chat bot
	function showChatBot() {
		chatBox.classList.add('position-center');
	}
*/

// Function to show the final claim prize popup
function showCongratsClaimPrize() {
  levelThree.style.display = "none";
  loadingPanel.style.display = "none";
  congratsClaimPrize.style.display = "block";
  congratsClaimPrize.classList.add("confetti");
  timerStart();
  // chatBox.classList.remove('position-center');
}

/* Function to open designated link in a new tab.
This is due to the game overlaying the <a href="#.."> links making them not work. There's always a way ;) */
function openLinkInNewTab() {
  window.open("https://www.google.com", "_blank");
}

claimPrizeCTA.addEventListener("click", openLinkInNewTab);

// Timer to boot the 2 minute countdown
function timerBoot(duration, display) {
  var countdown = duration,
    mins,
    secs;
  setInterval(function () {
    mins = parseInt(countdown / 60, 10);
    secs = parseInt(countdown % 60, 10);
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    display.textContent = mins + ":" + secs;
    if (--countdown < 0) {
      countdown = duration;
    }
  }, 1000);
}
function timerStart() {
  var twoMins = 60 * 2,
    display = document.querySelector("#countdown");
  timerBoot(twoMins, display);
}

// Function to show the progress bar
$percent = 0;

$(document.documentElement).click(function () {
  if ($percent < 100) {
    $percent += 1;
  } else if ($percent == 100) {
    ("");
  }
  $(".progress-bar").width($percent + "%");
  $(".progress-bar").html($percent + "%");
});

// Function to hide notification on click
close.addEventListener("click", function () {
  notifs.classList.add("visuallyhidden");
  notifs.style.display = "none";
});
