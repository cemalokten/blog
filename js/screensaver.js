const screensaverContainer = document.querySelector(".screensaver--container");
const screensaverClock = document.querySelector(".screensaver--clock");
const main = document.getElementsByTagName("main");
const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");
const pageTitle = document.querySelector("title");

const showScreensaver = function () {
	screensaverContainer.style.opacity = 1;
	screensaverContainer.style.visibility = "visible";
	main[0].classList.add("blur");
	header[0].classList.add("blur");
	footer[0].classList.add("blur");
};

const hideScreensaver = function () {
	screensaverContainer.style.opacity = 0;
	// Timeout used to hide screenSaverContainer after opacity had transitioned to 0
	// If no Timeout then opacity transition is overridden by visibily changing to hidden
	setTimeout(() => (screensaverContainer.style.visibility = "hidden"), 10);
};

function timeNow() {
	// Time in format of AM / PM (eg. 1:35 PM, 10:23 AM)
	// This format is 'friendlier' and fits this site better than 24 hour clock
	return new Date().toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
	});
}

//  Refresh time and border-colour every second, to match the ticking of a clock
const getTime = function () {
	setInterval(() => {
		screensaverClock.textContent = timeNow();
		// screensaverClock.style.color = screensaverClock.style.color === 'blue' ? 'red' : 'blue';
	}, 1000);
};

getTime();

let idleTime = 0;

// Increment idleTime by 1 sec until idleTime >= 12 seconds
// then show screensaver and change page-title to current time
function checkIfIdle() {
	idleTime += 1000;
	if (idleTime >= 12000) {
		showScreensaver();
		pageTitle.textContent = `${timeNow()}`;
	}
}

//  Reset idleTime to 0, hidescreensaver and return page-title to default
function resetIdleTime() {
	idleTime = 0;
	hideScreensaver();
	header[0].classList.remove("blur");
	main[0].classList.remove("blur");
	footer[0].classList.remove("blur");
	pageTitle.textContent = `Cemal Okten`;
}

// Execute checkIfIdle every 1 sec
setInterval(checkIfIdle, 1000);

// resetIdleTime if the user movesmouse, scrolls, or presses a key
document.addEventListener("mousemove", resetIdleTime);
document.addEventListener("scroll", resetIdleTime);
document.addEventListener("keydown", resetIdleTime);
