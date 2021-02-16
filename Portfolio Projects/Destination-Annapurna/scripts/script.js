const btnToTrips = document.querySelector(".btnToTrips");
const sectionTrips = document.getElementById("section--1");

btnToTrips.addEventListener("click", () => {
  console.log("button clicked");
  sectionTrips.scrollIntoView({ behavior: "smooth" });
});

// Sticky Navigation using intersection observer -----------------------------
//selecting the navi element
const nav = document.querySelector(".nav");

//creating the function that makes the Navi Sticky
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    logo.classList.add("logo-sticky");
  } else {
    nav.classList.remove("sticky");
    logo.classList.remove("logo-sticky");
  }
};

//Header Element
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

//creating a header observer using IntersectionObserver API
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

//initiating the header Observer on the header
headerObserver.observe(header);
