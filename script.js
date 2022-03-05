

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



  /*-- Parallax Library --*/

  var parallax = new Rellax('.parallax');

  var rellax = new Rellax('.rellax', {
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });