const btnToTrips = document.querySelector(".btnToTrips");
const sectionTrips = document.getElementById("section--1");

btnToTrips.addEventListener("click", () => {
  console.log("button clicked");
  sectionTrips.scrollIntoView({ behavior: "smooth" });
});

// Sticky Navigation using intersection observer -----------------------------
//selecting the navi element
const navi = document.querySelector(".nav");

//creating the function that makes the Navi Sticky
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navi.classList.add("sticky");
  } else {
    navi.classList.remove("sticky");
  }
};

//Header Element
const header = document.querySelector(".header");

//creating a header observer using IntersectionObserver API
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

//initiating the header Observer on the header
headerObserver.observe(header);
