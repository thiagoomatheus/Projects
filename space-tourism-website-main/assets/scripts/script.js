let html = document.querySelector("html")
let page = html.id

const menuOpen = document.querySelector(".header-menu img");
const menu = document.querySelector(".header-menu ul")
const menuClose = document.querySelector(".header-menu ul img")

let li = document.querySelectorAll(".main-menu li")

let menuItem1 = li[0]
let menuItem2 = li[1]
let menuItem3 = li[2]
let menuItem4 = li[3]

const infoImg = document.querySelector(".main-intro img")
const infoTitle = document.querySelector(".main-info-title")
const infoSubtitle = document.querySelector(".main-info-subtitle")
const infoDescription = document.querySelector(".main-info-description")
const infoDistance = document.querySelector("#distance")
const infoTravel = document.querySelector("#travel")

menuOpen.addEventListener("click", function() {
    menu.removeAttribute("class")
})

menuClose.addEventListener("click", function() {
    menu.setAttribute("class", "hidden")
})

menuItem1.addEventListener("click", function() {
    changeSelectItemInMenu(0)
    setActive(menuItem1)
    console.log("Clicou 1");
})

menuItem2.addEventListener("click", function() {
    changeSelectItemInMenu(1)
    setActive(menuItem2)
    console.log("Clicou 2");
})

menuItem3.addEventListener("click", function() {
    changeSelectItemInMenu(2)
    setActive(menuItem3)
    console.log("Clicou 3");
})

menuItem4.addEventListener("click", function() {
    changeSelectItemInMenu(3)
    setActive(menuItem4)
    console.log("Clicou 4");
})

async function changeSelectItemInMenu(i) {
    const response = await fetch("assets/json/data.json");
    let data = await response.json();

    if (page === "destinations") {
        const destinations = await data.destinations

        infoImg.setAttribute("src", destinations[i].images.webp)
        infoTitle.textContent = `${destinations[i].name}`;
        infoDescription.textContent = `${destinations[i].description}`;
        infoDistance.textContent = `${destinations[i].distance}`;
        infoTravel.textContent = `${destinations[i].travel}`;

    }
    else if(page === "crew"){
        const crew = data.crew

        infoImg.setAttribute("src", crew[i].images.webp)
        infoTitle.textContent = `${crew[i].name}`;
        infoSubtitle.textContent = `${crew[i].role}`;
        infoDescription.textContent = `${crew[i].bio}`;

    }
    else if (page === "technology"){
        const technology = data.technology

        infoImg.setAttribute("src", technology[i].images.landscape)
        infoTitle.textContent = `${technology[i].name}`;
        infoDescription.textContent = `${technology[i].description}`;
    }
}


function setActive(item) {
    li.forEach(item => {
        item.removeAttribute("class")
    })
    item.classList.add("active")
}
