const home = (container) => {

    let box = document.createElement("div");
    box.setAttribute("id", "home-box")
    let h2 = document.createElement("h2");
    h2.textContent = "The best there is..."
    box.appendChild(h2);

    let background = document.createElement("img");
    background.setAttribute("id", "background");
    background.setAttribute("src", "../dist/assets/images/sushi.jpg");

    container.appendChild(background);
    container.appendChild(box);
}

export default home;