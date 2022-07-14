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

/* 
function ScrollTriggerFooter() {
  gsap.set('footer', {
    yPercent: -50
  });
  const uncover = gsap.timeline({
    paused: true
  });
  uncover.to('footer', {
    yPercent: 0,
    ease: 'none'
  });
  ScrollTrigger.create({
    trigger: 'main',
    // markers: true,
    start: 'bottom bottom',
    end: '+=95%',
    animation: uncover,
    scrub: true
  }); // uncover.restart();
}
ScrollTriggerFooter()

function ScrollTriggerContentIntro() {
  gsap.set('content-intro', {
    yPercent: 100
  });
  const uncover = gsap.timeline({
    paused: true
  });
  uncover.to('content-intro', {
    yPercent: 0,
    ease: 'none'
  });
  ScrollTrigger.create({
    trigger: 'main',
    // markers: true,
    start: 'bottom bottom',
    end: '+=95%',
    animation: uncover,
    scrub: true
  }); // uncover.restart();
}
ScrollTriggerContentIntro();

 */

const showAnimMenu = gsap.from('.main-tool-bar', { 
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnimMenu.play() : showAnimMenu.reverse()
  }
});


/* 
barba.init({
  transitions: [{
    name: 'default-transition',

    leave(data) {
      return gsap.to(data.current.container, {
        duration: 0.5,
        y: 200,
        opacity: 0
      });
    },

    after(data) {
      return gsap.from(data.next.container, {
        duration: 0.5,
        y: 200,
        opacity: 0,
        onComplete: function () {
          initScrollTriggers();
        }
      });
    }

  }]
});
barba.hooks.afterLeave(data => {
  let triggers = ScrollTrigger.getAll();
  triggers.forEach(trigger => {
    trigger.kill();
  });
});
barba.hooks.enter(data => {
  window.scrollTo(0, 0);
  ScrollTrigger.refresh(true);
});
barba.hooks.afterEnter(data => {
  // console.log(data.next.namespace);
  // var x = data.next.namespace;
  reInitialized();
});
 */
