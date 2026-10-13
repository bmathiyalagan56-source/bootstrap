
// =========================
// GET ALL SLIDES
// =========================

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;


// =========================
// SHOW SLIDE
// =========================

function showSlide(number) {

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });

    slides[number].classList.add("active");

    currentSlide = number;
}


// =========================
// NEXT SLIDE
// =========================

function nextSlide() {

    if (currentSlide < slides.length - 1) {

        showSlide(currentSlide + 1);

    }

}


// =========================
// PREVIOUS SLIDE
// =========================

function previousSlide() {

    if (currentSlide > 0) {

        showSlide(currentSlide - 1);

    }

}


// =========================
// FIRST SLIDE
// =========================

showSlide(0);


// =========================
// CONTACT FORM
// =========================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );

        this.reset();

    });

