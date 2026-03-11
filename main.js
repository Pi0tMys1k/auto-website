// Фильтрация
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Меняем активную кнопку
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === 'all' || card.dataset.type === filter) {
                card.classList.remove('hide');
            } else {
                card.classList.add('hide');
            }
        });
    });
});

// Таймер (1 час)
let time = 3600;
function updateTimer() {
    const h = Math.floor(time / 3600).toString().padStart(2, '0');
    const m = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const s = (time % 60).toString().padStart(2, '0');
    
    document.getElementById('timer').innerText = `${h}:${m}:${s}`;
    if (time > 0) time--;
}
setInterval(updateTimer, 1000);