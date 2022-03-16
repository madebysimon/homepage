const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector("nav");

navIcon.onclick = function () {
    nav.classList.toggle('show');
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


/*-- GSAP Scrolltrigger --*/

/* gsap.from(".animationUp", {
  y: 50,
  opacity: 0.2,
  duration: .2,
  ease: 'power4'
}) */

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 25;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_nomove")) {
    x = 0;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1, //duration 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "power4", // expo
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

/* -- GSAP Parallax -- */
/* gsap.utils.toArray(".parallaxcontainer .parallaximage").forEach((section, i) => {
  const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

gsap.fromTo(section,{ 
y: -heightDiff
}, {
scrollTrigger: {
  trigger: section.parentElement,
  scrub: true,
  invalidateOnRefresh: true
},
y: 0,
ease: "none"
});
});
 */

/*-- Rellax Parallax --*/

var rellax = new Rellax('.rellax', {
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

