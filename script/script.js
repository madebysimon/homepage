const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");

navIcon.onclick = function () {
}

/*-- Theme Switch auf Logo --*/
const DarkmodeIcon = document.querySelector(".toggle-darkmode");
DarkmodeIcon.onclick = function () {
}

/*-- Theme Switch Anfang */
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
document.body.classList.toggle("light-theme");
}
btn.addEventListener("click", function() {
if (prefersDarkScheme.matches) {
document.body.classList.toggle("light-theme");
var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
} else {
document.body.classList.toggle("dark-theme");
var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
}
localStorage.setItem("theme", theme);
});


/*-- Padding für Gallerie -*/
function setMargins() {
	const element = document.getElementById("anchor");
	let position = element.offsetLeft;
	console.log(position)
	let root = document.documentElement;
	if (position > 30) {
		root.style.setProperty('--WINDOW-X-SPACE', position + "px");
	  } else {
		root.style.setProperty('--WINDOW-X-SPACE', 30 + "px");
	  }
	};

/*-- Opening Hours -*/

	var hrsConfig = {
		0: {
		  open: 1,
		  close: 0
		},
		1: {
		  open: 9,
		  close: 17
		},
		2: {
		  open: 9,
		  close: 17
		},
		3: {
		  open: 9,
		  close: 17
		},
		4: {
		  open: 9,
		  close: 17
		},
		5: {
		  open: 9,
		  close: 17
		},
		6: {
		  open: 1,
		  close: 0
		},
		offset: +1
	  };
	
	  Date.prototype.subHours = function (h) {    
		 this.setTime(this.getTime() - (h * 60 * 60 * 1000));
		 return this;   
	  }
	  
	  function isWorkingHour (now) {
		// Adjust remote user's time to match business time
		now = now.subHours(hrsConfig.offset + (now.getTimezoneOffset() / 60));
		var day = now.getDay();
		var hours = now.getHours();
		// console.log(day, hours, config[day].open, config[day].close, config.offset);
		return hours >= hrsConfig[day].open && hours < hrsConfig[day].close;
	  }

	  var isOpenHrs = isWorkingHour(new Date());

	  function setHoursDot() {
		if (isOpenHrs = true) {
			const hrsDot = document.querySelector(".hours-indicator");
			hrsDot.classList.toggle('active');
			hrsDot.setAttribute('tooltip', 'open now');
		  } else {
		  }
	  };
	  setHoursDot();
