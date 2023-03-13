export default menuPage; 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

function menuPage() {
    const container = document.getElementById("display")
    if (container.hasChildNodes()) {
        console.log("myDiv has child nodes.");
        removeAllChildNodes(container)
      }
      
    const placeholder = document.createElement("div")
    placeholder.textContent = "Menu!"
    placeholder.classList.add("menu")
    container.appendChild(placeholder)
}