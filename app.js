const body = document.querySelector("body");
let element = document.getElementById("info");
const searchBtn = element.getElementsByClassName("search_btn");
const sideBtn = element.getElementsByClassName("sidebar_btn");
const closeBtn = document.getElementsByClassName("closebtn");
const sidemenu = document.getElementById("sidemenu");

function handlePageClick(event) {
  openNav();
}

function handleClick(event) {
  console.log(event);
}

function openNav() {
  body.style.filter = "brightness(80%)";
  sidemenu.style.width = "300px";
}

function closeNav() {
  sidemenu.style.width = "0";
}

function openSearch() {}

if (element) {
  searchBtn[0].addEventListener("click", handleClick);
  sideBtn[0].addEventListener("click", openNav);
  closeBtn[0].addEventListener("click", closeNav);
}
