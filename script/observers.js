const header = document.querySelector("nav");
const sectionOne = document.querySelector(".navtrigger");

const sectionOneOptions = {
  rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-sticky");
    } else {
      header.classList.remove("nav-sticky");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);