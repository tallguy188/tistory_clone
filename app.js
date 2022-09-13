const body = document.querySelector("body");
const header = document.querySelector("header");
let element = document.getElementById("info");
const searchBtn = document.querySelector(".search_btn");
const sideBtn = document.querySelector(".sidebar_btn");
const closeBtn = document.querySelector(".closebtn");
const sidemenu = document.getElementById("sidemenu");
const searchbox = document.getElementById("searchbox");
const searchclose = document.querySelector(".searchclose");
const word = document.querySelector(".word");
const clearclose = document.querySelector(".clearclose");
const form = document.querySelector("form");
const tagarea = document.querySelector(".tagarea");
const tagList = document.querySelector(".tagList");
const sidebar = document.querySelector(".sidebar");

function handleClick(event) {
  console.log(event);
}

function openNav() {
  sidebar.style.width = "300px";
  sidebar.style.display = "block";
}

function closeNav() {
  sidebar.style.display = "none";
  sidebar.style.width = "0";
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
  word.value = "";
}

function handleSubmit(event) {
  event.preventDefault();
  const textvalue = word.value;
  word.value = "";
  handletag(textvalue);
}

function handletag(value) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = value;
  li.appendChild(span);
  tagList.appendChild(li);
  span.style.color = "#ff567a";
}

if (element) {
  sideBtn.addEventListener("click", openNav);
  closeBtn.addEventListener("click", closeNav);
}

if (searchbox) {
  searchBtn.addEventListener("click", openSearch);
  searchclose.addEventListener("click", closeSearch);
  clearclose.addEventListener("click", clearBox);
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}
