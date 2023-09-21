document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
});

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

const handleShowMore = () => {
    const hiddenCards = document.querySelectorAll('.hidden-card');

    hiddenCards.forEach((card) => {
        card.classList.toggle('hidden');
        card.classList.toggle('block');
    })
}