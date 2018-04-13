function addToCartEventHandler(cart) {
  return function(item) {
    cart.addItemToCart(item)
    cart.render()
  }
}


const myCart = new CartList(
  document.querySelector('.cart')
)
const myProducts = new ProductList(
  products,
  document.querySelector('.products'),
  addToCartEventHandler(myCart)
)

// start rendering page
myProducts.render()



document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault()
  form.innerHTML = "Congrats you are now in the loop for all future SharkBite News!"
})

const productList = document.querySelector('.products')
// let allproducts = for (let i = 0; i < productsList.length; i++) {
//                         productsList[i].style.display = "block"
//                           }
const breakfastList = document.querySelector('.products').getElementsByClassName('breakfast');

function removeBreakfast() {
  for (let i = 0; i < breakfastList.length; i++) {
    breakfastList[i].style.display = "none"
  }
}
function addBreakfast() {
  for (let i = 0; i < breakfastList.length; i++) {
    breakfastList[i].style.display = "block"
  }
}

const lunchList = document.querySelector('.products').getElementsByClassName('lunch');

function removeLunch() {
  for (let i = 0; i < lunchList.length; i++) {
    lunchList[i].style.display = "none"
  }
}
function addLunch() {
  for (let i = 0; i < lunchList.length; i++) {
    lunchList[i].style.display = "block"
  }
}

const dessertList = document.querySelector('.products').getElementsByClassName('dessert');

function removeDessert() {
  for (let i = 0; i < dessertList.length; i++) {
    dessertList[i].style.display = "none"
  }
}

function addDressert() {
  for (let i = 0; i < dessertList.length; i++) {
    dessertList[i].style.display = "block"
  }
}

const drinksList = document.querySelector('.products').getElementsByClassName('drinks');

function removeDrinks() {
  for (let i = 0; i < drinksList.length; i++) {
    drinksList[i].style.display = "none"
  }
}

function addDrinks() {
  for (let i = 0; i < drinksList.length; i++) {
    drinksList[i].style.display = "block"
  }
}


document.querySelector('#allButton').addEventListener("click", function(event) {
addBreakfast()
addLunch()
addDressert()
addDrinks()
})

document.querySelector('#breakfastBites').addEventListener("click", function(event) {
  addBreakfast()
  removeLunch()
  removeDrinks()
  removeDessert()
})

document.querySelector('#lunchBites').addEventListener("click", function(event) {
  addLunch()
  removeBreakfast()
  removeDrinks()
  removeDessert()
})

document.querySelector('#dessertBites').addEventListener("click", function(event) {
  addDressert()
  removeLunch()
  removeDrinks()
  removeBreakfast()
})

document.querySelector('#drinks').addEventListener("click", function(event) {
  addDrinks()
  removeLunch()
  removeBreakfast()
  removeDessert()
})
