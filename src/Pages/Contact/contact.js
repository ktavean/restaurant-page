const contact = (container) => {

    let background = document.createElement("img");
    background.setAttribute("src", "./assets/images/sushi3.jpg");
    background.setAttribute("id", "background");

    let box = document.createElement("div");
    box.setAttribute("id", "contact-box");

    let textcont = document.createElement("div");
    textcont.setAttribute("id", "contact-text");

    let h2 = document.createElement("h2");
    h2.textContent = "Contact";
    textcont.appendChild(h2);

    let text = document.createElement("p");
    text.textContent = "Find us at the following address: ";
    textcont.appendChild(text);


    let mapouter = document.createElement("div");
    mapouter.setAttribute("class", "mapouter");
    mapouter.innerHTML = '<div class="gmap_canvas"><iframe width="450" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Bucharest&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:500px;width:550px;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:550px;}</style></div>';
    
    box.appendChild(textcont);
    box.appendChild(mapouter);
    container.appendChild(background);
    container.appendChild(box);
    
}

export default contact;