//SMOOTH SCROLLING
const btntotrips = document.querySelector(".btntotrips");
const sectionTrips = document.querySelector(".section--1");

btntotrips.addEventListener("click", function (e) {
  console.log("btntotrips clicked");
  sectionTrips.scrollIntoView({ behavior: "smooth" });
});

const btnToAdventures = document.querySelector(".btnToAdventures");

btnToAdventures.addEventLister('click', function() {
  sectionTrips.scrollIntoView({ behavior: "smooth" });
};

