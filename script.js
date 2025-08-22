document.addEventListener('DOMContentLoaded', function () {
    
    // --- MANUAL CAROUSEL (with Next/Prev buttons) ---
    const manualCarousels = document.querySelectorAll('.carousel-container:not(.auto-scroll-container)');

    manualCarousels.forEach(container => {
        const carousel = container.querySelector('.carousel');
        const prevBtn = container.querySelector('.carousel-btn.prev');
        const nextBtn = container.querySelector('.carousel-btn.next');

        if (!carousel || !prevBtn || !nextBtn) {
            return;
        }

        nextBtn.addEventListener('click', () => {
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });

    // --- AUTOMATIC INFINITE CAROUSEL ---
    const autoCarousels = document.querySelectorAll('.carousel.auto-scroll');

    autoCarousels.forEach(carousel => {
        // Get all the movie cards inside
        const movieCards = carousel.querySelectorAll('.movie-card');
        
        // Clone each movie card and append it to the end of the carousel
        movieCards.forEach(card => {
            const clone = card.cloneNode(true);
            carousel.appendChild(clone);
        });
    });

});

/* -------- HERO: slides data -------- */
const heroSlides = [
  {
    title: 'Explore the<br>World of cinema',
    desc: 'Get in touch with the latest movies,<br>add to your watchlist, and play<br> anytime and anywhere.',
    cta: 'Get Started',
    bg: 'images/Cozy Movie Theater-1.png',
    img: 'images/to kill a monkey.jpg'
  },
  {
    title: `Lights, Camera,<br> Movie Time`,
    desc: "Don't stress on what to watch next<br>Get recommwndation even on the<br>go!",
    cta: 'Get Started',
    bg: 'images/Couple in Decaying Classical Architecture.png',
    img: 'images/Forever.jpg'
  },
  {
    title: "What's playing?",
    desc: 'Save, add to watchlist and watch<br>with your favourite available<br>application.',
    cta: 'Add to Watchlist',
    bg: 'images/Karen-zhao.jpg',
    img: 'images/Spider man.jpg'
  }
];

const heroSection = document.querySelector('.hero-section');
const heroTitle = document.querySelector('.hero-content h1');
const heroDesc = document.querySelector('.hero-content p');
const heroCta = document.querySelector('.hero-content .btn-primary');
const heroImages = document.querySelectorAll('.hero-carousel .hero-slide img');

// Create dots dynamically
// const dotsContainer = document.createElement('div');
// dotsContainer.classList.add('hero-dots');
// heroSection.appendChild(dotsContainer);
const dotsContainer = 
document.querySelector('.hero-carousel .hero-dots');
let dots = [];

// Current arrangement of slides (indexes in heroSlides)
let positions = [0, 1, 2]; // main, thumbnail1, thumbnail2

// Update hero section and thumbnails
function renderHero() {
  // Update hero background & text from main slide
  const mainSlide = heroSlides[positions[0]];
  heroSection.style.backgroundImage = `url('${mainSlide.bg}')`;
  heroTitle.innerHTML = mainSlide.title;
  heroDesc.innerHTML = mainSlide.desc;
  heroCta.textContent = mainSlide.cta;

  // Update thumbnails
  heroImages.forEach((img, idx) => {
    img.src = heroSlides[positions[idx]].img;
    img.classList.toggle('active', idx === 0); // first box gets active class
  });

  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', positions[0] === i);
  });
}

// Click on thumbnails
heroImages.forEach((img, idx) => {
  img.addEventListener('click', () => {
    if (idx === 0) return; // clicking main image does nothing
    // Swap clicked thumbnail into main position
    const clickedIndex = positions[idx];
    const temp = positions[0];
    positions[0] = clickedIndex;
    positions[idx] = temp;
    renderHero();
  });
});

// Create dots for each slide
heroSlides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => {
    if (positions[0] === i) return; // already main
    // Find where clicked slide currently is
    const currentPos = positions.indexOf(i);
    const temp = positions[0];
    positions[0] = i;
    positions[currentPos] = temp;
    renderHero();
  });
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

// Initialize
renderHero();


// JavaScript for top picks disapearing and appearing
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 8000); // Change every 10s
}
// Select elements
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

// Open menu
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

// Close menu
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});
const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.querySelector('.dropdown-toggle');

// Toggle menu on click
toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
});

// Close dropdown if clicked outside
document.addEventListener('click', () => {
    dropdown.classList.remove('active');
});

