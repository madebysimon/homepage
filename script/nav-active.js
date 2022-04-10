/*   function setActive() {
    linkObj = document.getElementById('nav-links').getElementsByTagName('a');
    for(i=0;i<linkObj.length;i++) {
      if(document.location.pathname === linkObj[i].getAttribute('href')) {
        linkObj[i].classList.add("nav-active");
      }
    }
  }
  
  window.onload = setActive();
*/

$(function () {
  $('.nav-links a').each(function () {
      if ($(this).prop('href') == window.location.href) {
          $(this).addClass('nav-active');
      }
  });
});


/* 
  (function() {
    var current = location.pathname;
    $('#navbar a').each(function() {
        var $this = $(this); 

        // we check comparison between current page and attribute redirection.
        if ($this.attr('href') === current) {
            $this.addClass('nav-active');
        }
    });
})();

addActive(){
var activeNavlink = document.querySelectorAll('nav a[href^="/' + location.pathname.split("/")[1] + '"]');
activeNavlink[0].classList.add('active');
} */