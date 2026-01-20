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

// ------------------------------------



let wrapper = document.getElementById('carouselWrapper');
        let dotsContainer = document.getElementById('carouselDots');
        let slides = document.querySelectorAll('.testimonial-slide');
        let totalSlides = slides.length;
        let currentIndex = 0;
        let autoPlayInterval;

        // Create dots
        for (let i = 0; i < totalSlides; i++) {
            let dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
            resetAutoPlay();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            goToSlide(currentIndex);
        }

        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 4000);
        }

        function resetAutoPlay() {
            clearInterval(autoPlayInterval);
            startAutoPlay();
        }

        // Start auto-play
        startAutoPlay();

        // Pause on hover
        wrapper.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });

        wrapper.addEventListener('mouseleave', () => {
            startAutoPlay();
        });