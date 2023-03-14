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
    
      const containerHome = document.createElement("div")
      containerHome.classList.add("home-flex")
      container.appendChild(containerHome)
      console.log(containerHome)

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
