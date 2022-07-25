const body = document.querySelector("body");

let element = document.getElementById("info");

const searchBtn = element.getElementsByClassName("search_btn");

const sideBtn = element.getElementsByClassName("sidebar_btn");

function handleClick(event) {
  console.log(event);
  loadPage();
}

function loadPage() {}

if (element) {
  searchBtn[0].addEventListener("click", handleClick);

  sideBtn[0].addEventListener("click", handleClick);
}
