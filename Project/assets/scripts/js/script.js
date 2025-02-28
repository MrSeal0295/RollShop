window.addEventListener('click', function(event){
    
    if (event.target.dataset.action === 'plus') {
        const counterWrapper = event.target.closest('.counter-wrapper')

        const counter = counterWrapper.querySelector('[data-counter]');

        counter.innerText = ++counter.innerText;
    }


    if (event.target.dataset.action === 'minus') {
        
        const counterWrapper = event.target.closest('.counter-wrapper')

        const counter = counterWrapper.querySelector('[data-counter]');

        counter.innerText = --counter.innerText;

        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 0;
        }

        if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 0) {
            event.target.closest('.cart-item').remove()
            cartStatus()
            priceCalc()
        }
    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        priceCalc()
    }
})