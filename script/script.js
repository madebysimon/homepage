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


/*-- Barba.js Page Transitions --*/
barba.init({
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