
const URL = 'https://67c0a509b9d02a9f224a85f5.mockapi.io/api/v1/Rolls';

async function fetchData() {
    try {
        const response = await fetch(URL);
        const rolls = await response.json();
        renderRolls(rolls);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}

function renderRolls(rolls) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    rolls.forEach(roll => {
        const card = document.createElement('div');
        card.className = 'card mb-4';
        card.setAttribute('data-name', roll["item-title"]);
        card.innerHTML = `
            <img src="\${roll["product-img"]}" class="card-img-top" alt="\${roll["item-title"]}">
            <div class="card-body">
                <h5 class="card-title">\${roll["item-title"]}</h5>
                <p class="card-text">\${roll["items-in-box"]} шт.</p>
                <p class="card-text"><strong>\${roll["price__currency"]} ₽</strong></p>
                <button class="btn btn-primary add-to-cart" data-id="\${roll["id"]}">Добавить в корзину</button>
            </div>
        `;
        container.appendChild(card);
    });
}

window.addEventListener('load', fetchData);
