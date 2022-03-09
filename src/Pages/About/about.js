const about = (container) => {

    let box = document.createElement("div");
    box.setAttribute("id", "about-box")

    let textContent = document.createElement("div");
    textContent.setAttribute("id", "about-text");

    let h3 = document.createElement("h3");
    h3.textContent = "About us";
    textContent.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = "suntem o corporatie smechera facem bani si suntem smecheri avem pula mare rau din 1980 si futem tot ce prindem! facem sushi bun ca avem talent."
    textContent.appendChild(p);
    box.appendChild(textContent);
    
    let img = document.createElement("img");
    img.setAttribute("src", "./assets/images/chef-1.jpg");
    img.setAttribute("id", "about-picture");
    box.appendChild(img);

    let background = document.createElement("img");
    background.setAttribute("src", "./assets/images/sushi2.jpg");
    background.setAttribute("id", "background");

    container.appendChild(background);
    container.appendChild(box);
}

export default about;