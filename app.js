const body = document.querySelector("body");
let element = document.getElementById("info");
const searchBtn = element.getElementsByClassName("search_btn");
const sideBtn = element.getElementsByClassName("sidebar_btn");
const sidemenu = document.getElementById("sidemenu");
const contentarea = document.getElementById("contentArea");

function handlePageClick(event) {
  openNav();
}

function handleClick() {}

function openNav() {
  sidemenu.style.width = "300px";
  contentarea.style.marginLeft = "300px";
  body.style.background;
}

function closeNav() {
  sidemenu.style.width = "0";
  contentarea.style.marginLeft = "0";
}

if (element) {
  searchBtn[0].addEventListener("click", handleClick);
  sideBtn[0].addEventListener("click", handlePageClick);
}
