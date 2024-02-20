function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

const slides = document.querySelectorAll(".slide");
const maxCounter = slides.length - 1; // Maximum allowed counter value

var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter = Math.max(0, counter - 1); // Ensure counter doesn't go below 0
    slideImage();
};

const goNext = () => {
    counter = Math.min(maxCounter, counter + 1); // Ensure counter doesn't exceed maxCounter
    slideImage();
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


// navbar


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
