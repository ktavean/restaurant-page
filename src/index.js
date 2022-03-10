import home from "./Pages/Home/home";
import about from "./Pages/About/about";
import menu from "./Pages/Menu/menu";
import contact from "./Pages/Contact/contact";

// array with pages and match em up to the p tags on click as well as a function to delete the current node;
// ez;

const getContainer = () => {
    return document.querySelector("#content");
}


const removeElements = () => {
    let container = getContainer();
    for (let i = 0; i < container.childElementCount+1; i++) {
        if(container.children[0]) {
            container.children[0].remove();
        }
    }
    for (let i = 0; i < plinks.length; i++) {
        if (plinks[i].classList.contains("active")) {
            plinks[i].classList.remove("active");
        }
    }
}

const changePage = (e) => {
    removeElements();
    let container = getContainer();
    switch(e.target.textContent) {
        case "Home":
            home(container);
            break;
        case "About":
            about(container);
            break;
        case "Menu":
            menu(container);
            break;
        case "Contact":
            contact(container);
            break;
    }
}

const plinks = document.querySelectorAll("p");
for (let i = 0; i < plinks.length; i++) {
    plinks[i].addEventListener("click", (e) => {
        changePage(e)
        plinks[i].classList.add("active")
    })
}

plinks[0].classList.add("active");
home(getContainer());

/*

Font by Google Fonts(https://fonts.google.com/specimen/Inconsolata);
Logo by https://www.freelogodesign.org/;
Photo 1 by Frans Van Heerden from Pexels;
Photo 2 by Diego Pontes from Pexels;
Photo 3 by Ivan Samkov from Pexels;
Photo 4 by Kim Cruz from Pexels;
Photo 5 by Lucio Panerai from Pexels;
Sushi Photos sampled from zensushi.ro;

*/