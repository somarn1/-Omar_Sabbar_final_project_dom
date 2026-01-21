let buttons = document.querySelectorAll('.filter-btn');
let items = document.querySelectorAll('.menu-item');

function showItems(category) {
    items.forEach(item => {
        let text = item.querySelector('h3').innerText.toLowerCase();
        if (category.toLowerCase() === 'Starters') {
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



class UniversalCarousel {
    constructor(element) {
        this.carousel = element;
        this.track = element.querySelector('.carousel-track');
        this.slides = element.querySelectorAll('.carousel-slide');
        this.slidesToShow = parseInt(element.dataset.bsSlides) || 1;
        this.autoplaySpeed = parseInt(element.dataset.bsAutoplay) || 4000;
        this.currentIndex = 0;
        this.autoplayInterval = null;

        this.init();
    }

    init() {
        this.createDots();
        this.updateSlidesToShow();
        this.startAutoplay();
        this.addEventListeners();
    }

    updateSlidesToShow() {
        if (window.innerWidth <= 768) {
            this.slidesToShow = 1;
        } else if (window.innerWidth <= 1024 && this.slidesToShow > 2) {
            this.slidesToShow = 2;
        }
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';

        const totalDots = Math.ceil(this.slides.length / this.slidesToShow);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        this.carousel.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.carousel-dot');
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        const slideWidth = 100 / this.slidesToShow;
        this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}%)`;
        this.updateDots();
        this.resetAutoplay();
    }

    nextSlide() {
        const totalDots = Math.ceil(this.slides.length / this.slidesToShow);
        this.currentIndex = (this.currentIndex + 1) % totalDots;
        this.goToSlide(this.currentIndex);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplaySpeed);
    }

    resetAutoplay() {
        clearInterval(this.autoplayInterval);
        this.startAutoplay();
    }

    addEventListeners() {
        this.carousel.addEventListener('mouseenter', () => {
            clearInterval(this.autoplayInterval);
        });

        this.carousel.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });

        window.addEventListener('resize', () => {
            this.updateSlidesToShow();
        });
    }
}

// Initialize all carousels on page
document.addEventListener('DOMContentLoaded', () => {
    let carousels = document.querySelectorAll('.universal-carousel');
    carousels.forEach(carousel => new UniversalCarousel(carousel));
});



// --------------------------

let openBtn = document.getElementById("openModal");
let modal = document.getElementById("bookingModal");
let closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


