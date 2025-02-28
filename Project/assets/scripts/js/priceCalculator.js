function priceCalc() {
    const cartItem = document.querySelectorAll('.cart-item')
    const delivCost = document.querySelector('.delivery-cost')
    const totalPriceEl = document.querySelector('.total-price')
    const deliv = document.querySelector('[data-cart-delivery]')
    let totalPrice = 0;

    cartItem.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')

        const curPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += curPrice
    })
    console.log(totalPrice)
    totalPriceEl.innerText = totalPrice

    if (totalPrice > 0) {
        deliv.classList.remove('none')
    }
    else {
        deliv.classList.add('none')
    }

    if (totalPrice>=600) {
        delivCost.classList.add('free')
        delivCost.innerText = 'бесплатно'
    }
    else {
        delivCost.classList.remove('free')
        delivCost.innerText = '100 ₽'
    }
}