import './style.css';

console.log("Test");
// alert("Alert");

const navBar = document.querySelector("#nav");
const cafeTitle = document.createElement("h1");
cafeTitle.setAttribute("id", "cafeTitle");
cafeTitle.innerHTML = "Verdant Cafe";
navBar.appendChild(cafeTitle);

const navBtnContainer = document.createElement("div");
navBtnContainer.setAttribute("id", "navBtnContainer");
navBar.appendChild(navBtnContainer);
navBtnContainer.append(document.querySelector("#homeBtn"));
navBtnContainer.append(document.querySelector("#menuBtn"));
navBtnContainer.append(document.querySelector("#aboutBtn"));

const contentContainer = document.querySelector("#content");
const tagline = document.createElement("h3");
tagline.setAttribute("id", "tagline");
tagline.innerHTML = "\"Mother Terra's Favorite Coffee!\"";
contentContainer.appendChild(tagline);

const storyContainer = document.createElement("div");
storyContainer.setAttribute("id", "storyContainer");

const storyText = document.createElement("p");
const storyTextNode = document.createTextNode("Serving Honeymoon Bay with assorted coffee, tea, and artisinal sandwiches since 2012. Verdant Cafe is owned by brothers Joey and Jay, two nationally recognized coffee connoiseurs.");
storyText.appendChild(storyTextNode);
storyText.setAttribute("id", "storyText");
storyContainer.appendChild(storyText);

contentContainer.appendChild(storyContainer);