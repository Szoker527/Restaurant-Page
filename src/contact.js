export default contactPage; 

function contactPage() {
    const container = document.getElementById("content")
    const placeholder = document.createElement("div")
    placeholder.textContent = "Contact!"
    placeholder.classList.add("test")
    container.appendChild(placeholder)
}