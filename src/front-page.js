export default homePage; 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

function homePage() {
    const container = document.getElementById("display")
    if (container.hasChildNodes()) {
        console.log("myDiv has child nodes.");
        removeAllChildNodes(container)
      }
    const placeholder = document.createElement("div")
    placeholder.textContent = "Home!"
    placeholder.classList.add("home")
    container.appendChild(placeholder)
}
