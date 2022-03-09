import home from "./Pages/Home/home";
import about from "./Pages/About/about";
import menu from "./Pages/Menu/menu";

// array with pages and match em up to the p tags on click as well as a function to delete the current node;
// ez;

const getContainer = () => {
    return document.querySelector("#content");
}


const removeNodes = () => {
    let container = getContainer();
    for (let i = 0; i < container.childElementCount+1; i++) {
        if(container.children[0]) {
            container.children[0].remove();
        }
    }
}

const changePage = (e) => {
    removeNodes();
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
    }
}

const plinks = document.querySelectorAll("p");
for (let i = 0; i < plinks.length; i++) {
    plinks[i].addEventListener("click", (e) => {
        changePage(e)});
}


home(getContainer());