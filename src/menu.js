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
  
    const containerHome = document.createElement("div")
    containerHome.classList.add("home-flex")
    container.appendChild(containerHome)
    console.log(containerHome)

    const h2 = document.createElement("h2")
    h2.textContent = "MENU"
    h2.classList.add("menu")
    containerHome.appendChild(h2)
    
    const pizzaMarg = "Margherita pizza is a classic Italian pizza that is beloved for its simplicity and deliciousness. This pizza features a thin crust that is crispy on the outside and chewy on the inside, topped with a flavorful tomato sauce, fresh mozzarella cheese, and fragrant basil leaves."
    const pizzaParm = "Pizza Parmesan Ham is a tasty variation of the classic Chicken Parmesan pizza, featuring a crispy crust topped with tomato sauce, sliced ham, seasoned chicken, and a generous amount of parmesan cheese."
    const pizzaPros = "Pizza Prosciutto is a classic Italian pizza variety that features a crispy crust topped with tomato sauce, mozzarella cheese, and thin slices of savory prosciutto."
    const pizzaSalami = "Pizza Salami is a classic pizza variety that features a crispy crust topped with tomato sauce, mozzarella cheese, and slices of spicy salami."
    const fries = "Fries, also known as French fries, are a beloved side dish that is enjoyed around the world. They are typically made from potatoes that are cut into thin strips, which are then fried in oil until they are crispy and golden brown."
    const chickenWings = "Spicy chicken wings are a popular appetizer or snack that are enjoyed around the world. They are typically made from chicken wings that are seasoned with a blend of spices and then deep-fried until they are crispy on the outside and tender on the inside."
    
    titles(containerHome, "Main Dishes")
    createFoodBox(containerHome, "Pizza Margherita", pizzaMarg, "13$", "pizza-marg")
    createFoodBox(containerHome, "Pizza Parmesan", pizzaParm, "18$", "pizza-parm")
    createFoodBox(containerHome, "Pizza Salami", pizzaSalami, "15$", "pizza-salami")
    createFoodBox(containerHome, "Pizza Salami", pizzaPros, "15$", "pizza-pros")
    titles(containerHome, "Servings")
    createFoodBox(containerHome, "Fries", fries, "4$", "fries")
    createFoodBox(containerHome, "Spicy Chicken Wings", chickenWings, "4$", "chicken-wings")

}

function titles(container, text) {
  const subtitle = document.createElement("h2")
  subtitle.classList.add("sub-titles")
  subtitle.textContent = `${text}`
  container.appendChild(subtitle)

}

function createFoodBox(container, titles, texts, prices, images) {
  const foodBox = document.createElement("div")
  const img = document.createElement("div")
  const descriptionSide = document.createElement("div")
  container.appendChild(foodBox)

  foodBox.appendChild(descriptionSide)
  foodBox.appendChild(img)
  foodBox.classList.add("food-box")

  const title = document.createElement("h3")
  const para = document.createElement("p")
  const price = document.createElement("h3")
  img.classList.add(`${images}`);
  descriptionSide.classList.add("pizza-context");

  title.textContent = `${titles}`
  para.textContent = `${texts}`
  price.textContent = `${prices}`

  descriptionSide.appendChild(title)
  descriptionSide.appendChild(para)
  descriptionSide.appendChild(price)
}
