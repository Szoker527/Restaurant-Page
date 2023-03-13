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