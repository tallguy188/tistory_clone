const body = document.querySelector("body");
const header = document.querySelector("header");
let element = document.getElementById("info");
const searchBtn = element.getElementsByClassName("search_btn");
const sideBtn = element.getElementsByClassName("sidebar_btn");
const closeBtn = document.getElementsByClassName("closebtn");
const sidemenu = document.getElementById("sidemenu");
const searchbox = document.getElementById("searchbox");
const searchclose = document.getElementsByClassName("searchclose");
const word = document.getElementsByClassName("word");
const clearclose = document.getElementsByClassName("clearclose");
const form = document.querySelector("form");

function handleClick(event) {
  console.log(event);
}

/*function openNav() {
  if (sidemenu.style.display == "none") {
    sidemenu.style.display == "block";
  } else {
    sidemenu.style.display == "none";
  }
}*/

function openNav() {
  sidemenu.style.display = "block";
  sidemenu.style.width = "300px";
}

function closeNav() {
  sidemenu.style.display = "none";
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

function clearBox() {
  word[0].value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  const textvalue = word[0].value;
  word[0].value = "";
  console.log(textvalue);
}

function addtag() {
  const li = document.createElement("li");
  const span = document.createElement("span");
}

if (element) {
  sideBtn[0].addEventListener("click", openNav);
  closeBtn[0].addEventListener("click", closeNav);
}

if (searchbox) {
  searchBtn[0].addEventListener("click", openSearch);
  searchclose[0].addEventListener("click", closeSearch);
  clearclose[0].addEventListener("click", clearBox);
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}
