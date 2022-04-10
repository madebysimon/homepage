//header
gsap.registerPlugin(ScrollTrigger);

barba.init({
	sync: true,

	transitions: [
		{
			async leave(data) {
				console.log(data);
				pageTransition();
				await delay(1000);
				data.current.container.remove();
			},

			async beforeEnter(data) {
				ScrollTrigger.getAll().forEach(t => t.kill());
			},

			async enter(data) {	
				// In the next page
				allAnimationComponents();
			},

			async once(data) {
				allAnimationComponents();
			},
		},
	],
  views: [{
    namespace: 'home',
    beforeEnter() {
      // sets the nav-active
        $(function () {
          $('.nav-links a').each(function () {
              $(this).removeClass('nav-active');
              if ($(this).prop('href') == window.location.href) {
                  $(this).addClass('nav-active');
              }
          });
        });
    },
    afterEnter() {
      
    }
  }]
});

function allAnimationComponents() {
	contentAnimation();
}

function contentAnimation() {
	console.log('content animation');

  // start of custom code
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
  
  // Parallax
  
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
  // end of custom code
}

function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition li", {
		duration: 1,
		scaleX: 1,
		transformOrigin: "left",
		stagger: 0.2,
	});

	tl.to(".transition li", {
		duration: 1,
		scaleX: 0,
		transformOrigin: "right",
		stagger: 0.1,
		delay: 0.1,
	});
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


// OLD TRY BELOW

/*-- Barba.js Page Transitions --*/
/* barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0
      });
    }
  }]
  views: [{
    namespace: 'home',
    beforeEnter() {
      // sets the nav-active
        $(function () {
          $('.nav-links a').each(function () {
              $(this).removeClass('nav-active');
              if ($(this).prop('href') == window.location.href) {
                  $(this).addClass('nav-active');
              }
          });
        });
    },
    afterEnter() {
      // refresh the parallax based on new page content
      ScrollTrigger.refresh();
      //?
    }
  }]

});

// do something before the transition starts
barba.hooks.before(() => {
  document.querySelector('html').classList.add('barba-transitioning');
});
// do something after the transition finishes
barba.hooks.after(() => {
  document.querySelector('html').classList.remove('barba-transitioning');
  //removes the transition class
});

 */
/* barba.Pjax.start();
barba.Prefetch.init();



barba.Dispatcher.on('newPageReady', function(currentStatus) {
  const link = currentStatus.url.split(window.location.origin)[1].substring(1); // get path of current page

  const navigation             = document.querySelector('.navbar');
  const navigationLinks        = navigation.querySelectorAll('.nav-link');
  const navigationLinkIsActive = navigation.querySelector("a[href='" + link + "']");

  Array.prototype.forEach.call(navigationLinks, (navigationLink) => navigationLink.classList.remove('is-active')); // remove CSS class 'is-active' from all .navigation__links

  navigationLinkIsActive.classList.add('nav-active'); // add CSS class to current .navigation__link
});
 */