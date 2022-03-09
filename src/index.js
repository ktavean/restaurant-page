import home from "./Pages/Home/home";

const container = document.querySelector("#content");

home(container);

// array with pages and match em up to the p tags on click as well as a function to delete the current node;
// ez;

const plinks = document.querySelectorAll("p");
for (let i = 0; i < plinks.length-1; i++) {
    plinks[i].addEventListener("click", () => {console.log("test")});
}