const about = (container) => {

    let box = document.createElement("div");
    box.setAttribute("id", "about-box")

    let textContent = document.createElement("div");
    textContent.setAttribute("id", "about-text");

    let h3 = document.createElement("h3");
    h3.textContent = "About us";
    textContent.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio quia excepturi nam magni sed, aperiam nulla officia voluptatum totam quibusdam iusto possimus aut ab unde molestiae ullam corporis ratione!";
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