const sections = document.querySelectorAll('.section');

// Reveal sections strictly upon scrolling
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;

        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

// Advanced individual card animations
document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate independently inside sections
    const animatableElements = document.querySelectorAll(`
        .about-card, .stat-card, 
        .skill-category, .project-card, 
        .timeline-item, .experience-card, 
        .education-card, .cert-card, .contact-card
    `);

    // Add base class for individual animations
    animatableElements.forEach(el => {
        el.classList.add('fade-up');
    });

    // Intersection Observer for staggered smooth intro
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add tiny delay for staggering if they appear together
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animatableElements.forEach(el => observer.observe(el));

    // Trigger scroll event once on load to show elements already in view
    window.dispatchEvent(new Event('scroll'));
});
