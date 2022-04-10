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


let parallax = gsap.timeline()
.to('.rellax img', {
  y:-200,
  scrollTrigger:{
    start:'top 100%',
    end:'bottom 0%',
    scrub:'1',
    markers: false,
    invalidateOnRefresh: true,
  }
})

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

/*-- Rellax Parallax (retired by GSAP) --*/

/* var rellax = new Rellax('.rellax', {
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

 */