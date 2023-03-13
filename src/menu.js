export default menuPage; 

function menuPage() {
    const container = document.getElementById("content")
    const placeholder = document.createElement("div")
    placeholder.textContent = "Menu!!"
    placeholder.classList.add("test")
    container.appendChild(placeholder)
}