import './style.css';

console.log("Test");
// alert("Alert");

const navBar = document.querySelector("#nav");
const cafeTitle = document.createElement("h3");
cafeTitle.setAttribute("id", "cafeTitle");
cafeTitle.innerHTML = "Verdant Cafe";
navBar.appendChild(cafeTitle);

const navBtnContainer = document.createElement("div");
navBtnContainer.setAttribute("id", "navBtnContainer");
navBar.appendChild(navBtnContainer);
navBtnContainer.append(document.querySelector("#homeBtn"));
navBtnContainer.append(document.querySelector("#menuBtn"));
navBtnContainer.append(document.querySelector("#aboutBtn"));