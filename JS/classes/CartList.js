class CartList {
  constructor(elementToRenderIn) {
    this.elementToRenderIn = elementToRenderIn
    if (JSON.parse(localStorage.getItem('data'))) {
      this.cart = JSON.parse(localStorage.getItem('data'))
      this.render()
    } else {
      this.cart = {}
    }
  }

  addItemToCart(item) {
    // check for duplicates
    if (this.cart.hasOwnProperty(item.id)) {
      this.cart[item.id].quantity += 1
    } else {
      item.index = Object.keys(this.cart).length
      item.quantity = 1
      this.cart[item.id] = item
    }
    return this
  }

  removeItemFromCart(item) {
    if (this.cart[item.id].quantity > 1) {
      this.cart[item.id].quantity -= 1
    } else {
      delete this.cart[item.id]
    }
  }

  static renderCartItem(item, removeItem) {
    const li = document.createElement('li')
    addClassesToElement(li, 'list-group-item', 'd-flex', 'justify-content-between', 'lh-condensed')

    li.addEventListener('click', function() {
      removeItem(item)
    })

    const div = document.createElement('div')

    const h6 = document.createElement('h6')
    addClassesToElement(h6, 'my-0')
    h6.innerHTML = item.name
    div.appendChild(h6)

    const small = document.createElement('small')
    small.innerHTML = `${item.quantity} x ${item.price}`
    div.appendChild(small)

    li.appendChild(div)

    const price = document.createElement('span')
    price.innerHTML = `$${ (item.quantity*item.price).toFixed(2) }`

    li.appendChild(price)

    return li

  }

  renderTotal() {
    const li = document.createElement('li')
    addClassesToElement(li, 'list-group-item', 'd-flex', 'justify-content-between')

    const span = document.createElement('span')
    span.innerHTML = `(${this.calculateTotalItems()} items)  Total `
    li.appendChild(span)

    const strong = document.createElement('strong')
    strong.innerHTML = `$${this.calculateTotalPrice().toFixed(2)}`
    li.appendChild(strong)

    return li
  }

  calculateTotalPrice() {
    return Object.values(this.cart).reduce((acc, ele) => acc + (ele.price * ele.quantity), 0)
  }

  calculateTotalItems() {
    return Object.values(this.cart).reduce((acc, ele) => acc + ele.quantity, 0)
  }


  // impure method
  render() {
    document.querySelector('#cartcounter').innerHTML = `${this.calculateTotalItems()}`
    const sortedByIndexCart = Object.values(this.cart).sort((a, b) => a.index - b.index)

    const cartIncludingTotal = [...sortedByIndexCart.map((product) =>
      CartList.renderCartItem(product, (item) => {
        this.removeItemFromCart(item)
        this.render()
      })), this.renderTotal()]
    // modifying the DOM
    empty(this.elementToRenderIn)
    appendChildrenArray(this.elementToRenderIn, cartIncludingTotal)

    //console.log(sortedByIndexCart)
    localStorage.setItem('data', JSON.stringify(this.cart))

  }
}
