export default pageLoad; 

function pageLoad () {
    const container = document.getElementById("content")
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")
    const h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    
    h1.textContent = "wow"
    container.appendChild(h1)
    console.log(container)
    console.log("whot")

}