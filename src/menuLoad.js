import fruitTeaImg from './assets/fruitTea.jpg';
import grapefruitTeaImg from './assets/grapefruitTea.jpg';
import strawbSmoothieImg from './assets/strawberrySmoothie.jpg';
import latteImg from './assets/latte.jpg';
import coffeeMilkImg from './assets/coffeeMilk.jpg';
import cremeBruleeCoffeeImg from './assets/cremeBruleeCoffee.jpg';

export function menuLoad() {
    const contentContainer = document.querySelector("#content");
    const menuBody = document.createElement("div");
    menuBody.setAttribute("id", "menuBody");

    const menuHeader = document.createElement("h2");
    menuHeader.setAttribute("id", "menuHeader");
    menuHeader.innerHTML = "~Menu~";
    menuBody.appendChild(menuHeader);
    
    contentContainer.appendChild(menuBody);


    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menuContainer");
    
    const menuGrid = document.createElement("div");
    menuGrid.setAttribute("id", "menuGrid");
    

    const menuItem1 = document.createElement("div");
    menuItem1.setAttribute("class", "menuItem");
    const menuItem1Img = document.createElement("img");
    menuItem1Img.src = fruitTeaImg;
    menuItem1.appendChild(menuItem1Img);
    const menuItem1Text = document.createElement("h3");
    menuItem1Text.innerHTML = "Garden Fruit Tea";
    const menuItem1Desc = document.createElement("p");
    menuItem1Desc.innerText = "Artisinal Four Seasons Tea flavored with lemon and orange.";
    menuItem1.appendChild(menuItem1Text);
    menuItem1.appendChild(menuItem1Desc);
    menuGrid.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    menuItem2.setAttribute("class", "menuItem");
    const menuItem2Img = document.createElement("img");
    menuItem2Img.src = grapefruitTeaImg;
    menuItem2.appendChild(menuItem2Img);
    const menuItem2Text = document.createElement("h3");
    menuItem2Text.innerHTML = "Ceylon Beachside Tea";
    const menuItem2Desc = document.createElement("p");
    menuItem2Desc.innerText = "Ceylon green tea mixed with grapefruit.";
    menuItem2.appendChild(menuItem2Text);
    menuItem2.appendChild(menuItem2Desc);
    menuGrid.appendChild(menuItem2);

    const menuItem3 = document.createElement("div");
    menuItem3.setAttribute("class", "menuItem");
    const menuItem3Img = document.createElement("img");
    menuItem3Img.src = strawbSmoothieImg;
    menuItem3.appendChild(menuItem3Img);
    const menuItem3Text = document.createElement("h3");
    menuItem3Text.innerHTML = "Strawberry Rose Smoothie";
    const menuItem3Desc = document.createElement("p");
    menuItem3Desc.innerText = "Strawberry and rose blended with ice for an icy delicacy.";
    menuItem3.appendChild(menuItem3Text);
    menuItem3.appendChild(menuItem3Desc);
    menuGrid.appendChild(menuItem3);

    menuContainer.appendChild(menuGrid);
    menuBody.appendChild(menuContainer);
}