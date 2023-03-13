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
      
    const placeholder = document.createElement("div")
    placeholder.textContent = "Contact!"
    placeholder.classList.add("contact")
    container.appendChild(placeholder)
}