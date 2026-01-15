// ================================
// Contact Form (Fake/Static Success Message)
// ================================
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;

    formMessage.style.color = '#27ae60';
    formMessage.textContent = 'Thank you! Your message has been sent. We will get back to you soon!';

    this.reset();

    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// You can remove everything else below if you no longer have carousels
// (the error will disappear immediately)

// ================================
// Reviews Carousel
// ================================
// const reviewSlides = document.querySelectorAll('.review-card');
// const totalReviewSlides = reviewSlides.length;

// if (totalReviewSlides > 0) {
//     const reviewInner = document.getElementById('carouselInner');
//     const reviewDotsContainer = document.getElementById('carouselDots');

//     let reviewIndex = 0;

//     // Create dots for reviews
//     for (let i = 0; i < totalReviewSlides; i++) {
//         const dot = document.createElement('span');
//         dot.classList.add('carousel-dot');
//         if (i === 0) dot.classList.add('active');
//         dot.onclick = () => goToReview(i);
//         reviewDotsContainer.appendChild(dot);
//     }

//     const reviewDots = document.querySelectorAll('#carouselDots .carousel-dot');

//     function updateReviews() {
//         reviewInner.style.transform = `translateX(-${reviewIndex * 100}%)`;
//         reviewDots.forEach((dot, idx) => {
//             dot.classList.toggle('active', idx === reviewIndex);
//         });
//     }

//     function moveReviews(direction) {
//         reviewIndex = (reviewIndex + direction + totalReviewSlides) % totalReviewSlides;
//         updateReviews();
//     }

//     function goToReview(index) {
//         reviewIndex = index;
//         updateReviews();
//     }

    // Optional: Auto-slide reviews every 6 seconds
//     setInterval(() => moveReviews(1), 6000);

    
// }

// ================================
// Gallery Carousel
// ================================
// const gallerySlides = document.querySelectorAll('.gallery .carousel-slide');
// const totalGallerySlides = gallerySlides.length;

// if (totalGallerySlides > 0) {
//     const galleryInner = document.getElementById('galleryInner');
//     const galleryDotsContainer = document.getElementById('galleryDots');

//     let galleryIndex = 0;

//     // Create dots for gallery
//     for (let i = 0; i < totalGallerySlides; i++) {
//         const dot = document.createElement('span');
//         dot.classList.add('carousel-dot');
//         if (i === 0) dot.classList.add('active');
//         dot.onclick = () => goToGallery(i);
//         galleryDotsContainer.appendChild(dot);
//     }

//     const galleryDots = document.querySelectorAll('#galleryDots .carousel-dot');

//     function updateGallery() {
//         galleryInner.style.transform = `translateX(-${galleryIndex * 100}%)`;
//         galleryDots.forEach((dot, idx) => {
//             dot.classList.toggle('active', idx === galleryIndex);
//         });
//     }

//     function moveGallery(direction) {
//         galleryIndex = (galleryIndex + direction + totalGallerySlides) % totalGallerySlides;
//         updateGallery();
//     }

//     function goToGallery(index) {
//         galleryIndex = index;
//         updateGallery();
//     }

    // Optional: Auto-slide gallery every 5 seconds
//     setInterval(() => moveGallery(1), 5000);

    
// }

// Simple touch swipe for both carousels (optional)
let touchStartX = 0;

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                // Swipe left → next
                if (carousel.querySelector('#galleryInner')) moveGallery(1);
                else if (carousel.querySelector('#carouselInner')) moveCarousel(1);
            } else {
                // Swipe right → previous
                if (carousel.querySelector('#galleryInner')) moveGallery(-1);
                else if (carousel.querySelector('#carouselInner')) moveCarousel(-1);
            }
        }
    });
});

// Mobile Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            hamburgerBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Scroll effect (shrink navbar)
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 80);
});

// Active link on scroll (optional but very user-friendly)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});