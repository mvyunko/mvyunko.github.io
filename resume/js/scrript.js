const block = document.querySelector("#btn_portfolio");
const block2 = document.querySelector("#btn_about_me");

block.addEventListener("mouseenter", function () {
   block.classList.remove("btn_hov");
   block2.classList.add("btn_hov");
});
block2.addEventListener("mouseenter", function () {
   block2.classList.remove("btn_hov");
   block.classList.add("btn_hov");
});

const hamburger = document.querySelector(".hamburger"),
   menu = document.querySelector(".menu"),
   clouseElem = document.querySelector(".menu__clouse");

hamburger.addEventListener("click", () => {
   menu.classList.add("active");
});

clouseElem.addEventListener("click", () => {
   menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__rating-counter"),
   lines = document.querySelectorAll(".skills__rating-line span");

counters.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});
