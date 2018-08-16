const user = {}
const userPay = {}

//declare HTML form boxes
const info = document.querySelector('.info')
const shippingInfo = document.querySelector('.shippingInfo')
const billingInfo = document.querySelector('.billingInfo')
const confirmInfo = document.querySelector('.confirmInfo')

//link navigator buttons
const infoShow = document.querySelector('.infoShow')
const shipShow = document.querySelector('.shipShow')
const billShow = document.querySelector('.billShow')
const confirmShow = document.querySelector('.confirmShow')

// checkbox
const rememberMe = document.querySelector('#rememberMe')
const sameBilling = document.querySelector('#sameBilling')

const name = document.querySelector('#name')
const email = document.querySelector('#email')
const shipAddress = document.querySelector('#shipAddress')
const shipCity = document.querySelector('#shipCity')
const shipState = document.querySelector('#shipState')
const shipZip = document.querySelector('#shipZip')
const billAddress = document.querySelector('#billAddress')
const billCity = document.querySelector('#billCity')
const billState = document.querySelector('#billState')
const billZip = document.querySelector('#billZip')

//navigation info listeners
function infoShowFunct(event) {
  info.classList.remove('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
}
infoShow.addEventListener('click', infoShowFunct)
infoShow.addEventListener('focus', infoShowFunct)

function shipShowFunct(event) {
  info.classList.add('d-none')
  shippingInfo.classList.remove('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.add('d-none')
}

shipShow.addEventListener('click', shipShowFunct)
shipShow.addEventListener('focus', shipShowFunct)

function billShowFunct(event) {
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.remove('d-none')
  confirmInfo.classList.add('d-none')
}

billShow.addEventListener('click', billShowFunct)
billShow.addEventListener('focus', billShowFunct)

function confirmShowFunct(event) {
  info.classList.add('d-none')
  shippingInfo.classList.add('d-none')
  billingInfo.classList.add('d-none')
  confirmInfo.classList.remove('d-none')
}

confirmShow.addEventListener('click', confirmShowFunct)
confirmShow.addEventListener('focus', confirmShowFunct)

//listen for form and record user user
document.querySelector('form').addEventListener('submit', gatherData)

function gatherData() {
  user.name = name.value
  user.email = email.value
  user.rememberMe = rememberMe.checked
  user.shipAddress = shipAddress.value
  user.shipCity = shipCity.value
  user.shipState = shipState.value
  user.shipZip = shipZip.value
  user.sameBilling = sameBilling.checked
  userPay.billAddress = billAddress.value
  userPay.billCity = billCity.value
  userPay.billZip = billCity.value
  userPay.billState = billState.value
  userPay.billZip = billZip.value
  if (user.rememberMe) localStorage.setItem('userdata', JSON.stringify(user))
}

sameBilling.addEventListener("click", () => {
  gatherData()
  if (sameBilling.checked) {
    billAddress.value = user.shipAddress
    billCity.value = user.shipCity
    billState.value = user.shipState
    billZip.value = user.shipZip
  } else {
    billAddress.value = ''
    billCity.value = ''
    billState.value = ''
    billZip.value = ''
  }
})

const recipt = document.querySelector('#recipt')

const cardNumberField = document.querySelector('#card-number-field')
cardNumberField.addEventListener('blur', () => {
  if (cardNumberField.value.length < 14 || cardNumberField.value.length > 19) {
    document.querySelector('#ccError').classList.remove('d-none')
  } else {
    document.querySelector('#ccError').classList.add('d-none')
  }
})

const submitButton = document.querySelector('#pay-now')
const errorchecking = document.querySelector('#errorHere')
const errorBox = document.querySelector('#errorBox')
submitButton.addEventListener('click', () => {

  if (!(name.value) || !(email.value)) {
    errorBox.classList.remove('d-none')
    infoShow.classList.remove('d-none')
    errorHere.innerHTML = 'Please fill out your name and email address!'
  }
  if (!(shipAddress) || !(shipCity) || !(shipState) || !(shipZip)) {
    errorBox.classList.remove('d-none')
    shipShow.classList.remove('d-none')
    errorHere.innerHTML = 'Please check your shipping information!'
  }
  if (!(billAddress) || !(billCity) || !(billState) || !(billZip)) {
    errorBox.classList.remove('d-none')
    billShow.classList.remove('d-none')
    errorHere.innerHTML = 'Please check your billing information'
  } else {
    recipt.innerHTML = `Shipping Info${name.value}\n${shipAddress.value}\n${shipCity.value}\n${shipState.value}, ${shipZip.value} \n\nBilling Address\n${billAddress.value}\n${billCity.value}\n${billState.value}, ${billZip.value}`
    confirmShow.classList.remove('d-none')
  }
})

JSON.parse(localStorage.getItem('userdata'))
