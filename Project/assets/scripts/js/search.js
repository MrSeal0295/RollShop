document.getElementById('search').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let container = document.getElementById('products-container');
    let cards = Array.from(container.children);

    cards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase();
        let matches = name.includes(input);
        card.style.display = matches ? '' : 'none';
    });

    // Перемещаем подходящие карточки вверх
    let matchingCards = cards.filter(card => card.getAttribute('data-name').toLowerCase().includes(input));
    matchingCards.forEach(card => container.prepend(card));
});
