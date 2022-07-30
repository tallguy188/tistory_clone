const body = document.querySelector("body");
const header = document.querySelector("header");
let element = document.getElementById("info");
const searchBtn = element.getElementsByClassName("search_btn");
const sideBtn = element.getElementsByClassName("sidebar_btn");
const closeBtn = document.getElementsByClassName("closebtn");
const sidemenu = document.getElementById("sidemenu");
const searchbox = document.getElementById("searchbox");
const searchclose = document.getElementsByClassName("searchclose");
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

function openSearch() {
  if (searchbox.style.display == "none") {
    searchbox.style.display = "block";
    header.style.display = "none";
  } else {
    searchbox.style.display = "none";
  }
}

function closeSearch() {
  if (searchbox.style.display == "block") {
    searchbox.style.display = "none";
    header.style.display = "block";
  }
}

if (element) {
  sideBtn[0].addEventListener("click", openNav);
  closeBtn[0].addEventListener("click", closeNav);
}

if (searchbox) {
  searchBtn[0].addEventListener("click", openSearch);
  searchclose[0].addEventListener("click", closeSearch);
}
