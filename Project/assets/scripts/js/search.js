function filterSearch() {
    let input = document.getElementById('search').value.toLowerCase()
    let cards = document.querySelectorAll('.card mb-4')

    cards.forEach(card => {
        let name = card.getAttribute('data-name').toLowerCase()
        card.classList.toggle('none', !name.includes(input))
    })
}