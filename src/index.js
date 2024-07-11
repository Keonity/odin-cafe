import './style.css';
import initialPageLoad from './initialPageLoad.js';
import fruitTeaImg from './assets/fruitTea.jpg';


console.log("Test");
// alert("Alert");

initialPageLoad();

const contentContainer = document.querySelector("#content");
const cafeTitle = document.querySelector("#cafeTitle");

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }
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
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }

    const fruitTea = document.createElement("img");
    fruitTea.src = fruitTeaImg;
    fruitTea.setAttribute("id", "fruitTea");
    contentContainer.appendChild(fruitTea);
})
const aboutBtn = document.querySelector("#aboutBtn");