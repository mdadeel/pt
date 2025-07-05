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

// Detail modal data for each coffee
const coffeeDetails = {
    espresso: {
        title: 'Espresso',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
        price: '$2.50',
        desc: 'Rich and bold, our classic espresso is the perfect pick-me-up for any time of day.',
        details: [
            'Intensity: Strong',
            'Origin: Colombia',
            'Notes: Dark chocolate, caramel, roasted nuts',
            'Serving: 30ml, single shot'
        ]
    },
    cappuccino: {
        title: 'Cappuccino',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        price: '$3.00',
        desc: 'A creamy blend of espresso and steamed milk, topped with a cloud of foam.',
        details: [
            'Intensity: Medium',
            'Origin: Brazil',
            'Notes: Creamy, smooth, balanced',
            'Serving: 180ml, with foam'
        ]
    },
    latte: {
        title: 'Latte',
        img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
        price: '$3.50',
        desc: 'Smooth espresso with steamed milk and a touch of foam for a mellow taste.',
        details: [
            'Intensity: Mild',
            'Origin: Guatemala',
            'Notes: Velvety, light, creamy',
            'Serving: 220ml, extra milk'
        ]
    },
    mocha: {
        title: 'Mocha',
        img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
        price: '$3.75',
        desc: 'A delicious fusion of espresso, chocolate, and steamed milk, topped with whipped cream.',
        details: [
            'Intensity: Medium',
            'Origin: Peru',
            'Notes: Chocolate, sweet, creamy',
            'Serving: 200ml, with whipped cream'
        ]
    }
};

// Modal logic
const detailBtns = document.querySelectorAll('.detail-btn');
const detailModal = document.getElementById('detailModal');
const detailBody = document.getElementById('detailBody');
const closeDetail = document.getElementById('closeDetail');

detailBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const key = this.getAttribute('data-detail');
        const data = coffeeDetails[key];
        if (data) {
            detailBody.innerHTML = `
                <img src="${data.img}" alt="${data.title}" style="width:100%;border-radius:10px;margin-bottom:1rem;">
                <h2 style="margin:0 0 0.5rem 0;font-family:'Pacifico',cursive;color:#ffb300;">${data.title}</h2>
                <div style="font-size:1.1rem;font-weight:bold;color:#2d1e12;margin-bottom:0.5rem;">${data.price}</div>
                <div style="color:#6f4e37;margin-bottom:0.7rem;">${data.desc}</div>
                <ul style="padding-left:1.1em;margin:0 0 0.5rem 0;color:#8d6742;">
                    ${data.details.map(d => `<li>${d}</li>`).join('')}
                </ul>
            `;
            detailModal.classList.add('active');
        }
    });
});
if (closeDetail) {
    closeDetail.addEventListener('click', () => {
        detailModal.classList.remove('active');
    });
}
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove('active');
    }
});
