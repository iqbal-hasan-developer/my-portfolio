
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed-text', {
        strings: ["Web Designer", "Frontend Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav.main-nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    const progressLines = document.querySelectorAll('.progress-line');
    const skillsSection = document.getElementById('skills');
    const radialBars = document.querySelectorAll('.radial-bar');
    const technicalSkillsContainer = document.querySelector('.technical-bars').closest('.container1');
    const professionalSkillsContainer = document.querySelector('.radial-bars').closest('.container1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressLines.forEach((line) => {
                    const span = line.querySelector('span');
                    if (span) {
                        setTimeout(() => {
                            span.style.width = span.dataset.width || '100%';
                        }, 500); // Delay setting width to allow background animation
                    }
                });
                radialBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.classList.add('animate');
                    }, index * 200);
                });
                if (technicalSkillsContainer) {
                    technicalSkillsContainer.classList.add('animate-slideRight');
                }
                if (professionalSkillsContainer) {
                    professionalSkillsContainer.classList.add('animate-slideLeft');
                }
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
