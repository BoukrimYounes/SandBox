let clickTexts = document.querySelectorAll(".text-show");
let downUp = document.querySelectorAll(".down");
let show = document.querySelectorAll(".show");

clickTexts[0].addEventListener("click", () => {
  show[0].classList.toggle("block");
  downUp[0].classList.toggle("ri-arrow-up-wide-line");
});
clickTexts[1].addEventListener("click", () => {
  show[1].classList.toggle("block");
  downUp[1].classList.toggle("ri-arrow-up-wide-line");
});
clickTexts[2].addEventListener("click", () => {
  show[2].classList.toggle("block");
  downUp[2].classList.toggle("ri-arrow-up-wide-line");
});

let clickQuestion = document.querySelectorAll(".question");
let plusMinus = document.querySelectorAll(".icon");
let answer = document.querySelectorAll(".answer");

clickQuestion[0].addEventListener("click", () => {
  answer[0].classList.toggle("block");
  plusMinus[0].classList.toggle("ri-subtract-line");
});
clickQuestion[1].addEventListener("click", () => {
  answer[1].classList.toggle("block");
  plusMinus[1].classList.toggle("ri-subtract-line");
});
clickQuestion[2].addEventListener("click", () => {
  answer[2].classList.toggle("block");
  plusMinus[2].classList.toggle("ri-subtract-line");
});
clickQuestion[3].addEventListener("click", () => {
  answer[3].classList.toggle("block");
  plusMinus[3].classList.toggle("ri-subtract-line");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 100,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let date = new Date();

let year = date.getFullYear();

window.document.getElementById("year").innerText = year;

let ul = document.querySelector(".ul");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  ul.classList.toggle("block");
});

window.addEventListener("scroll", () => {
  ul.classList.remove("block");
});
