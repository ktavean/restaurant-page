const menu = (container) => {

    let background = document.createElement("img");
    background.setAttribute("src", "./assets/images/sushi3.jpg");
    background.setAttribute("id", "menu-background");

    let box = document.createElement("div");
    box.setAttribute("id", "menu-box");
    
    let h2 = document.createElement("h2");
    h2.textContent = "Menu";
    box.appendChild(h2);

    container.appendChild(background);
    container.appendChild(box);
}

export default menu;