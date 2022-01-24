const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const toggle = $(".toggle");
const header = $(".header");
const showcase = $(".showcase");
//Event
toggle.addEventListener("click", () => {
  header.classList.toggle("active");
  showcase.classList.toggle("active");
});
//Function

function log(value) {
  return console.log(value);
}
