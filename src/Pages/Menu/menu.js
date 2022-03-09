const menu = (container) => {

    //background

    let background = document.createElement("img");
    background.setAttribute("src", "./assets/images/sushi3.jpg");
    background.setAttribute("id", "menu-background");

    //box + title

    let box = document.createElement("div");
    box.setAttribute("id", "menu-box");
    
    let h2 = document.createElement("h2");
    h2.textContent = "Menu";
    box.appendChild(h2);

    let foodArray = [
        {
            fdname: "Salmon Maki",
            price: "$5",
            desc: "8 Salmon Maki rolls",
            img: "./assets/images/menu/salmon-maki.jpg"
        },
        {
            fdname: "Cucumber Maki",
            price: "$5",
            desc: "8 Cucumber Maki rolls",
            img: "./assets/images/menu/cucumber-maki.jpg"
        },
        {
            fdname: "California Maki",
            price: "$5",
            desc: "8 California Maki Rolls",
            img: "./assets/images/menu/california-maki.jpg"
        },
        {
            fdname: "Philadelphia Maki",
            price: "$5",
            desc: "8 Philadelphia Maki Rolls",
            img: "./assets/images/menu/philadelphia-maki.jpg"
        },
        {
            fdname: "Tuna Maki",
            price: "$5",
            desc: "8 Tuna Maki Rolls",
            img: "./assets/images/menu/tuna-maki.jpg"
        },
        {
            fdname: "Avocado Maki",
            price: "$5",
            desc: "8 Avocado Maki Rolls",
            img: "./assets/images/menu/avocado-maki.jpg"
        },
        {
            fdname: "Naruto Ramen",
            price: "$5",
            desc: "Just like at Ichiraku's",
            img: "./assets/images/menu/naruto-ramen.jpg"
        },
    ]

    for (let i = 0; i < foodArray.length; i++) {
        let menuItem = document.createElement("div");
        menuItem.setAttribute("class", "menu-item");

        let foodname = document.createElement("p");
        foodname.setAttribute("class", "food-name");
        foodname.textContent = foodArray[i].fdname;

        let foodprice = document.createElement("p");
        foodprice.setAttribute("class", "food-price");
        foodprice.textContent = foodArray[i].price

        let fooddesc = document.createElement("p");
        fooddesc.setAttribute("class", "food-desc");
        fooddesc.textContent = foodArray[i].desc;

        let foodimg = document.createElement("img");
        foodimg.setAttribute("class", "food-img");
        foodimg.setAttribute("src", foodArray[i].img);

        menuItem.appendChild(foodname)
        menuItem.appendChild(foodprice)
        menuItem.appendChild(fooddesc)
        menuItem.appendChild(foodimg)
        box.appendChild(menuItem);
    }

    container.appendChild(background);
    container.appendChild(box);

}

export default menu;