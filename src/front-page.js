export default homePage; 

function homePage() {
    
    const container = document.getElementById("content")
    const placeholder = document.createElement("div")
    placeholder.textContent = "Home!"
    placeholder.classList.add("test")
    container.appendChild(placeholder)
}