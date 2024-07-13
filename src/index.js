import './style.css';
import initialPageLoad from './initialPageLoad.js';
import { menuLoad } from './menuLoad.js';
import fruitTeaImg from './assets/fruitTea.jpg';
import grapefruitTeaImg from './assets/grapefruitTea.jpg';
import strawbSmoothieImg from './assets/strawberrySmoothie.jpg';
import matchaSmoothieImg from './assets/matchaSmoothie.jpg';
import latteImg from './assets/latte.jpg';
import coffeeMilkImg from './assets/coffeeMilk.jpg';
import lemonFoamImg from './assets/lemonFoam.jpg';
import orangeFoamImg from './assets/orangeFoam.jpg';



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
    const storyTextNode = document.createTextNode("Serving Honeymoon Bay with assorted coffee, tea, and artisinal sandwiches since 2012.");
    storyText.appendChild(storyTextNode);
    const storyTextBreak = document.createElement("br");
    storyText.appendChild(storyTextBreak);
    const storyTextNode2 = document.createTextNode("Open 12 pm - 8 pm, Monday through Friday");
    storyText.appendChild(storyTextNode2);
    storyText.setAttribute("id", "storyText");
    storyContainer.appendChild(storyText);

    contentContainer.appendChild(storyContainer);

    const itemPreviewContainer = document.createElement("div");
    itemPreviewContainer.setAttribute("id", "itemPreviewContainer");

    const itemPreview1 = document.createElement("div");
    itemPreview1.setAttribute("class", "previewBox");
    const itemPreview1Img = document.createElement("img");
    itemPreview1Img.src = fruitTeaImg;
    itemPreview1.appendChild(itemPreview1Img);
    const itemPreview1Text = document.createElement("h3");
    itemPreview1Text.innerHTML = "Queen's Garden Tea";
    itemPreview1.appendChild(itemPreview1Text);
    itemPreviewContainer.appendChild(itemPreview1);

    const itemPreview2 = document.createElement("div");
    itemPreview2.setAttribute("class", "previewBox");
    const itemPreview2Img = document.createElement("img");
    itemPreview2Img.src = latteImg;
    itemPreview2.appendChild(itemPreview2Img);
    const itemPreview2Text = document.createElement("h3");
    itemPreview2Text.innerHTML = "Aviary Latte";
    itemPreview2.appendChild(itemPreview2Text);
    itemPreviewContainer.appendChild(itemPreview2);

    const itemPreview3 = document.createElement("div");
    itemPreview3.setAttribute("class", "previewBox");
    const itemPreview3Img = document.createElement("img");
    itemPreview3Img.src = strawbSmoothieImg;
    itemPreview3.appendChild(itemPreview3Img);
    const itemPreview3Text = document.createElement("h3");
    itemPreview3Text.innerHTML = "Strawberry Rose Smoothie";
    itemPreview3.appendChild(itemPreview3Text);
    itemPreviewContainer.appendChild(itemPreview3);

    contentContainer.appendChild(itemPreviewContainer);
    
});

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }

    menuLoad();
});
const aboutBtn = document.querySelector("#aboutBtn");
aboutBtn.addEventListener("click", () => {
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    }

    const joinUsContainer = document.createElement("div");
    joinUsContainer.setAttribute("id", "joinUsContainer");

    const joinUsText = document.createElement("h3");
    joinUsText.innerHTML = "Looking to join our team?";
    joinUsText.setAttribute("id", "joinUsText");
    const joinUsBody = document.createElement("p");
    joinUsBody.innerHTML = "Join our family today and become a Sprout by emailing your application and resume to us at verdantRoastery@gmail.com! <br> We look forward to hearing from you."

    joinUsContainer.appendChild(joinUsText);
    joinUsContainer.appendChild(joinUsBody);

    const partnerContainer = document.createElement("div");
    partnerContainer.setAttribute("id", "partnerContainer");

    const partnerText = document.createElement("h3");
    partnerText.setAttribute("id", "partnerText");
    partnerText.innerHTML = "Our partners and friends";

    const partnerBody = document.createElement("div");
    partnerBody.setAttribute("id", "partnerBody");

    const partnerItem1 = document.createElement("a");
    partnerItem1.innerHTML = "Faeriemyst Entertainment";
    partnerItem1.setAttribute("href", "www.google.com");

    const partnerItem2 = document.createElement("a");
    partnerItem2.innerHTML = "Aviary Roasteries";
    partnerItem2.setAttribute("href", "https://www.google.com");
    
    const partnerItem3 = document.createElement("a");
    partnerItem3.innerHTML = "Honeymoon Apiary";
    partnerItem3.setAttribute("href", "https://www.youtube.com");

    partnerBody.appendChild(partnerItem1);
    partnerBody.appendChild(partnerItem2);
    partnerBody.appendChild(partnerItem3);

    partnerContainer.appendChild(partnerText);
    partnerContainer.appendChild(partnerBody);
    
    contentContainer.appendChild(joinUsContainer);
    contentContainer.appendChild(partnerContainer);
    
});