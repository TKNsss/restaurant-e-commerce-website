const checked = document.querySelector(".check");
const nav = document.querySelector(".nav");

checked.addEventListener("click", () => {
  nav.classList.toggle(["nav--visible"]);
});

const dropDown = document.querySelector(".dropdown");
const displayContent = document.querySelector(".dropdown-content");

dropDown.addEventListener("click", () => {
  displayContent.classList.toggle("dropdown-content--visible");
});