// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Typing animation
const roles = ["Software Engineer", "Java Developer", "Web Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
        typing.textContent += roles[roleIndex].charAt(charIndex++);
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typing.textContent = roles[roleIndex].substring(0, --charIndex);
        setTimeout(eraseEffect, 60);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Contact form message
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("formMessage");
    msg.textContent = "Message sent successfully!";
    msg.style.color = "lightgreen";
    this.reset();
});

// Fade-in + skill animation
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");

            entry.target.querySelectorAll(".fill").forEach(bar => {
                bar.style.width = bar.dataset.width;
            });

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

// Project cards animation
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// Education cards animation
const educationCards = document.querySelectorAll(".education-card");

educationCards.forEach(card => {
    card.classList.add("hidden");
});

const educationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            educationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

educationCards.forEach(card => {
    educationObserver.observe(card);
});

