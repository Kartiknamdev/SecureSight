document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const href = card.getAttribute('data-href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
});