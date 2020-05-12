// Variables

const chatBox = document.getElementById("chatBox");
let welcomeBanner = document.getElementById("welcomeBanner");
const playGameCTA = document.getElementById("playGameCTA");
const claimPrizeCTA = document.getElementById("claimPrizeCTA");
const levelOne = document.getElementById("levelOne");
const levelTwo = document.getElementById("levelTwo");
const levelThree = document.getElementById("levelThree");
const peoplePlay = document.getElementById("peoplePlaying");
const playingPopup = document.getElementById("playingPopup");
const tapTapTap = document.getElementById("tapTapTap");
const nearlyThere = document.getElementById("nearlyThere");
const loadingPanel = document.getElementById("loadingPanel2");
const congratsClaimPrize = document.getElementById("congratsClaimPrize");
const blurry = document.querySelector(".blurry");
const close = document.getElementById("notification-close");
const notifs = document.querySelector(".notification");

// Function to trigger the loading bar on the WELCOME popup. It will start game once it reaches 100%

function loadingBarMove() {
  var elem = document.getElementById("myBaro");
  var percent = document.getElementById("percent");
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      hideWelcomeStartGame();
    } else {
      width++;
      elem.style.width = width + "%";
      percent.innerHTML = width + "%";
    }
    /*
    if (width >= 25) {
      $("#check1").fadeIn();
    }
    */
  }
}
loadingBarMove();

// Function to hide WELCOME module and remove blur, on click with transition effect
function hideWelcomeStartGame() {
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
        notifs.classList.remove("visuallyhidden");
      },
      {
        capture: false,
        once: true,
        passive: false
      }
    );
  }
}

// Function to detect number of clicks and show/hide the LEVEL 1,2,3 & people-playing popups accordingly
var clickCounter = 0;
window.addEventListener("click", function () {
  clickCounter++;
  if (clickCounter == 1) {
    // Show Tap Tap Tap popup
    tapTapTap.style.display = "block";
  } else if (clickCounter == 7) {
    // Hide Tap Tap Tap popup
    tapTapTap.style.display = "none";
  } else if (clickCounter == 12) {
    // Show peoplePlaying popup
    peoplePlaying.style.display = "block";
  } else if (clickCounter == 20) {
    // Hide peoplePlaying popup
    peoplePlaying.style.display = "none";
  } else if (clickCounter == 31) {
    playingPopup.style.display = "block";
  } else if (clickCounter == 37) {
    playingPopup.style.display = "none";
  } else if (clickCounter == 74) {
    // Show Nearly There popup
    nearlyThere.style.display = "block";
  } else if (clickCounter == 80) {
    // Hide Nearly There popup
    nearlyThere.style.display = "none";
  } else if (clickCounter == 100) {
    // Show Level 3 popup & loading bar & chat bot
    levelThree.style.display = "block";
    // levelThree.classList.add("confetti");
    loadingPanel.style.display = "block";
    loadingBarMove2();
    // showChatBot();
  }
});

// Function to trigger the moving of the loading bar
function loadingBarMove2() {
  var elem = document.getElementById("myBar2");
  var width = 1;
  var id = setInterval(frame, 40);
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
function openLink() {
  window.open("https://www.google.com", "_self");
}

claimPrizeCTA.addEventListener("click", openLink, firepixel);

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
