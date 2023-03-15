import page from "./front-page";
import menu from "./menu";
import contact from "./contact";
import './style.css';

const container = document.getElementById("content")
const h1 = document.createElement("h1")
const btn1 = document.createElement("button")
const btn2 = document.createElement("button")
const btn3 = document.createElement("button")
const btnContainer = document.createElement("div")
const displayContent = document.createElement("div")
const containerHome = document.createElement("div")
containerHome.classList.add("home-flex")
displayContent.appendChild(containerHome)

function home() {
    const h2 = document.createElement("h2")
    h2.textContent = "Welcome To Pizza Town"
    h2.classList.add("home-title")
    containerHome.appendChild(h2)    

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    div1.classList.add("home-card")
    div1.classList.add(`box1`)
    div2.classList.add("home-card")
    div2.classList.add(`box2`)
    div3.classList.add("home-card")
    div3.classList.add(`box3`)

    containerHome.appendChild(div1);
    containerHome.appendChild(div2);
    containerHome.appendChild(div3);

    console.log(div1)
    firstBox(div1)
    secondBox(div2)
    thirdBox(div3)
}

function firstBox(box) {
    const para = document.createElement("p")
    const para2 = document.createElement("p")
    const title = document.createElement("h3")

    para.textContent = "I'am happy that you visited this page, because you will see that our restaurant has the best pizza on Earth, maybe you can find better on Mars but here on earth we are the best so I welcome you to check our menu to see what you want to try, and then check when we are open."
    para2.textContent = "Come by don't be shy"
    title.textContent = "Big John"

    box.appendChild(para)
    box.appendChild(para2)    
    box.appendChild(title)

}

function secondBox(box) {
    const lu = document.createElement("lu")
    const li1 = document.createElement("li")
    const li2 = document.createElement("li")
    const title = document.createElement("h3")

    title.textContent = "Hours"
    li1.textContent = "Monday-Friday: 6:00AM - 11:00PM"
    li2.textContent = "Weekend: 5:00AM - 01:00AM"
    
    box.appendChild(title)
    box.appendChild(lu)
    lu.appendChild(li1)    
    lu.appendChild(li2)    
}

function thirdBox(box) {
    const para = document.createElement("p")
    const title = document.createElement("h3")

   
    title.textContent = "LOCATION"
    para.textContent = "Casa Santa Marta. 00120 Vatican City"
    box.appendChild(title)
    box.appendChild(para)

}

function footer() {
    const footer = document.createElement("footer");
    const footerContent = document.createElement("div")
    footerContent.classList.add("footer-author")
    footerContent.textContent = "Copyright © JoJo 2022"

    container.appendChild(footer)
    footer.appendChild(footerContent)

}
 



// Get the body element
const body = document.querySelector("body");

// Add the class to the body element
body.classList.add("background-image");

h1.textContent = "Best Pizza"
btn1.textContent = "Home"
btn2.textContent = "Menu"
btn3.textContent = "Contact"

btn1.addEventListener("click", page)
btn2.addEventListener("click", menu)
btn3.addEventListener("click", contact)

displayContent.setAttribute("id", "display")
btnContainer.classList.add("btn-container")
container.appendChild(btnContainer)
container.appendChild(h1)
container.appendChild(displayContent)

btnContainer.appendChild(btn1)
btnContainer.appendChild(btn2)
btnContainer.appendChild(btn3)

home()
footer()