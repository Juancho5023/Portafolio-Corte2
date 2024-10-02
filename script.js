let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(direction) {
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const sliderContainer = document.querySelector('.slides');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Smooth scroll en todas las anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

