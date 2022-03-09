function home() {
    const content = document.querySelector("#content");
    const ul = document.createElement("ul");

    const logolist = document.createElement("li");
    const imglogo = document.createElement("img");
    imglogo.setAttribute("src", "../dist/assets/images/logo.jpg");
    imglogo.setAttribute("alt", "logo");
    logolist.appendChild(imglogo);
    ul.appendChild(logolist);

    const homebutlist = document.createElement("li");
    const homelink = document.createElement("a");
    homelink.setAttribute("href", "");
    homelink.textContent = "Home";
    homebutlist.appendChild(homelink);
    ul.appendChild(homebutlist);

    const aboutbutlist = document.createElement("li");
    const aboutlink = document.createElement("a");
    aboutlink.setAttribute("href", "");
    aboutlink.textContent = "About";
    aboutbutlist.appendChild(aboutlink);
    ul.appendChild(aboutbutlist);

    const menubutlist = document.createElement("li");
    const menulink = document.createElement("a");
    menulink.setAttribute("href", "");
    menulink.textContent = "Menu";
    menubutlist.appendChild(menulink);
    ul.appendChild(menubutlist);

    const contactbutlist = document.createElement("li");
    const contactlink = document.createElement("a");
    contactlink.setAttribute("href", "");
    contactlink.textContent = "Contact";
    contactbutlist.appendChild(contactlink);
    ul.appendChild(contactbutlist);

    const background = document.createElement("img");
    background.setAttribute("id", "background");
    background.setAttribute("src", "../dist/assets/images/sushi.jpg");

    content.appendChild(ul);
    content.appendChild(background);
}

export default home;