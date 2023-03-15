export default contactPage; 

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function contactPage() {
const container = document.getElementById("display")
if (container.hasChildNodes()) {
    console.log("myDiv has child nodes.");
    removeAllChildNodes(container)
  }

  const containerHome = document.createElement("div")
  containerHome.classList.add("home-flex")
  container.appendChild(containerHome)
  console.log(containerHome)

  const h2 = document.createElement("h2")
  h2.textContent = "Contact"
  h2.classList.add("menu")
  containerHome.appendChild(h2)

  createContactBox(containerHome, "Joseph Joestar", "Chef", "+696 696 696", "thistruemail@gmail.com", "jojo-image")
  createContactBox(containerHome, "Suzi Q", "Kelner", "+121 121 121", "callmeq@gmail.com", "suzi-image")
  createContactBox(containerHome, "Robert E. O. Speedwagon", "Cleaner", "+666 666 6", "speedwagon@gmail.com", "speed-image")
}

function createContactBox(container, names, position, phone, email, images) {
const contactBox = document.createElement("div")
const img = document.createElement("div")
const descriptionSide = document.createElement("div")
container.appendChild(contactBox)

contactBox.appendChild(descriptionSide)
contactBox.appendChild(img)
contactBox.classList.add("contact-box")

const name = document.createElement("h3")
const positionName = document.createElement("p")
const phoneNumber = document.createElement("p")
const emailtext = document.createElement("p")

img.classList.add(`${images}`);

descriptionSide.classList.add("contact-context");

name.textContent = `${names}`
positionName.textContent = `${position}`
phoneNumber.textContent = `${phone}`
emailtext.textContent = `${email}`

descriptionSide.appendChild(name)
descriptionSide.appendChild(positionName)
descriptionSide.appendChild(phoneNumber)
descriptionSide.appendChild(emailtext)
}