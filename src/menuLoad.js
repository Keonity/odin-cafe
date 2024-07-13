import fruitTeaImg from './assets/fruitTea.jpg';
import grapefruitTeaImg from './assets/grapefruitTea.jpg';
import strawbSmoothieImg from './assets/strawberrySmoothie.jpg';
import matchaSmoothieImg from './assets/matchaSmoothie.jpg';
import latteImg from './assets/latte.jpg';
import coffeeMilkImg from './assets/coffeeMilk.jpg';
import lemonFoamImg from './assets/lemonFoam.jpg';
import orangeFoamImg from './assets/orangeFoam.jpg';

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
    menuItem1Text.innerHTML = "Queen's Garden Tea";
    const menuItem1Desc = document.createElement("p");
    menuItem1Desc.innerText = "Artisanal Silver Pine white tea gently flavored with lemon and orange.";
    menuItem1.appendChild(menuItem1Text);
    menuItem1.appendChild(menuItem1Desc);
    menuGrid.appendChild(menuItem1);

    const menuItem2 = document.createElement("div");
    menuItem2.setAttribute("class", "menuItem");
    const menuItem2Img = document.createElement("img");
    menuItem2Img.src = grapefruitTeaImg;
    menuItem2.appendChild(menuItem2Img);
    const menuItem2Text = document.createElement("h3");
    menuItem2Text.innerHTML = "Liurnian Daydream";
    const menuItem2Desc = document.createElement("p");
    menuItem2Desc.innerText = "Green tea from the mountaintops of Liurnia mixed with grapefruit.";
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

    const menuItem4 = document.createElement("div");
    menuItem4.setAttribute("class", "menuItem");
    const menuItem4Img = document.createElement("img");
    menuItem4Img.src = matchaSmoothieImg;
    menuItem4.appendChild(menuItem4Img);
    const menuItem4Text = document.createElement("h3");
    menuItem4Text.innerHTML = "Hedge Maze Smoothie";
    const menuItem4Desc = document.createElement("p");
    menuItem4Desc.innerText = "A milk-based matcha smoothie offering the refreshingly light sweetness of our house milk paired with the earthy depth of matcha.";
    menuItem4.appendChild(menuItem4Text);
    menuItem4.appendChild(menuItem4Desc);
    menuGrid.appendChild(menuItem4);
    
    const menuItem5 = document.createElement("div");
    menuItem5.setAttribute("class", "menuItem");
    const menuItem5Img = document.createElement("img");
    menuItem5Img.src = latteImg;
    menuItem5.appendChild(menuItem5Img);
    const menuItem5Text = document.createElement("h3");
    menuItem5Text.innerHTML = "Aviary Latte";
    const menuItem5Desc = document.createElement("p");
    menuItem5Desc.innerText = "Aviary Roastery espresso paired with our house milk and (optionally) sea salt foam for a savory morning delight.";
    menuItem5.appendChild(menuItem5Text);
    menuItem5.appendChild(menuItem5Desc);
    menuGrid.appendChild(menuItem5);

    const menuItem6 = document.createElement("div");
    menuItem6.setAttribute("class", "menuItem");
    const menuItem6Img = document.createElement("img");
    menuItem6Img.src = coffeeMilkImg;
    menuItem6.appendChild(menuItem6Img);
    const menuItem6Text = document.createElement("h3");
    menuItem6Text.innerHTML = "Hazelnut Sunrise";
    const menuItem6Desc = document.createElement("p");
    menuItem6Desc.innerText = "Deep coffee flavor meets hazelnut in a delicious, signature blend of Aviary Roastery espresso, hazelnut syrup, and fresh milk.";
    menuItem6.appendChild(menuItem6Text);
    menuItem6.appendChild(menuItem6Desc);
    menuGrid.appendChild(menuItem6);

    const menuItem7 = document.createElement("div");
    menuItem7.setAttribute("class", "menuItem");
    const menuItem7Img = document.createElement("img");
    menuItem7Img.src = orangeFoamImg;
    menuItem7.appendChild(menuItem7Img);
    const menuItem7Text = document.createElement("h3");
    menuItem7Text.innerHTML = "Citrus Cloud";
    const menuItem7Desc = document.createElement("p");
    menuItem7Desc.innerText = "Jasmine green tea paired with freshly-squeezed orange juice and sea salt foam for a savory then tangy and sweet refreshment.";
    menuItem7.appendChild(menuItem7Text);
    menuItem7.appendChild(menuItem7Desc);
    menuGrid.appendChild(menuItem7);

    const menuItem8 = document.createElement("div");
    menuItem8.setAttribute("class", "menuItem");
    const menuItem8Img = document.createElement("img");
    menuItem8Img.src = lemonFoamImg;
    menuItem8.appendChild(menuItem8Img);
    const menuItem8Text = document.createElement("h3");
    menuItem8Text.innerHTML = "Honeymoon Drop";
    const menuItem8Desc = document.createElement("p");
    menuItem8Desc.innerText = "Jasmine green tea with a hint of lemon paired with sea salt foam or whipped cream. (Lana Del Rey's favorite - 2023)";
    menuItem8.appendChild(menuItem8Text);
    menuItem8.appendChild(menuItem8Desc);
    menuGrid.appendChild(menuItem8);

    menuContainer.appendChild(menuGrid);
    menuBody.appendChild(menuContainer);
}