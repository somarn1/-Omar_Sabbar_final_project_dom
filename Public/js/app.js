let buttons = document.querySelectorAll('.filter-btn');
let items = document.querySelectorAll('.menu-item');

function showItems(category) {
    items.forEach(item => {
        let text = item.querySelector('h3').innerText.toLowerCase();
        if(category.toLowerCase() === 'Starters') {
            item.classList.add('show');
        } else if (text.includes(category.toLowerCase())) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        showItems(btn.innerText);
    });
});

showItems('starters');
