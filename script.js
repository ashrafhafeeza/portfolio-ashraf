// Personal Info Data
const personalInfo = {
    name: "Ashraf El-hafieza Rusmana",
    nickname: "Aceng",
    email: "ashraf.ptdarrahman@gmail.com",
    github: "https://github.com/ashrafhafeeza",
    linkedin: "https://linkedin.com/in/ashraf-el-hafieza-rusmana-054a54349",
    instagram: "https://instagram.com/arusmana_01"
};

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    }
}

// Mobile menu toggle
document.getElementById('mobileToggle').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Open project function
function openProject(url) {
    if (url && url !== '#') {
        window.open(url, '_blank');
    } else {
        showToast('Project link coming soon!');
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Simulate form submission
    console.log('Mock form submission:', data);

    // Show success message
    showToast('Message sent successfully! I\'ll get back to you soon.');

    // Reset form
    this.reset();
});

// Animate progress bars when skills section comes into view
function animateProgressBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                if (progressFill) {
                    const width = progressFill.style.width;
                    progressFill.style.width = '0%';
                    setTimeout(() => {
                        progressFill.style.width = width;
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function () {
    animateProgressBars();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function (e) {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileToggle');

    if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Add loading animation for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (this.type !== 'submit') return;

        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        this.disabled = true;

        setTimeout(() => {
            this.innerHTML = originalText;
            this.disabled = false;
        }, 2000);
    });
});