"use strict";
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const coords = [latitude, longitude];
      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Could not get your position");
    }
  );
}
//PAGE NAVIGATION
const section = document.querySelectorAll(".link").forEach(function (el) {
  el.addEventListener(`click`, function (e) {
    e.preventDefault();
    console.log("link");
    console.log(this);
    // const active = document.querySelectorAll(".active").forEach(function (d) {
    //   d.classList.toggle("dot--fill");
    // });
    // const active = document.querySelector(".active");
    // active.classList.toggle("dot--fill");
    // e.classList.toggle("dot--fill");
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
const btns = document.getElementsByClassName("dot");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("btn");
  const id = this.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});
