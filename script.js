// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinksArr = Array.from(document.querySelectorAll('nav a'));
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinksArr.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Simple contact form validation and feedback
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = '#d32f2f';
            return;
        }
        formMessage.textContent = 'Thank you for contacting us, ' + name + '!';
        formMessage.style.color = '#388e3c';
        form.reset();
    });
}
