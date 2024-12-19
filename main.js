// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar Animation
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Hero Section Animations
gsap.from('.hero-content h1', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.hero-content .tagline', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

gsap.from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.6
});

// Animate sections on scroll
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
});

// Features Animation
gsap.from('.feature', {
    scrollTrigger: {
        trigger: '.features',
        start: 'top 80%'
    },
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Tokenomics Chart
const createTokenomicsChart = () => {
    const ctx = document.createElement('canvas');
    document.querySelector('.distribution-chart').appendChild(ctx);

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Community', 'Development', 'Marketing', 'Team', 'Liquidity'],
            datasets: [{
                data: [40, 20, 15, 15, 10],
                backgroundColor: [
                    '#FF69B4',
                    '#9B4DCA',
                    '#FFD700',
                    '#FF1493',
                    '#DA70D6'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
};

// Load Chart.js and create the chart
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
script.onload = createTokenomicsChart;
document.head.appendChild(script);

// Create floating elements
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    const numElements = 15; // Number of each type of floating element

    // Helper function to get random position
    const getRandomPosition = () => {
        return {
            x: Math.random() * 80 + 10, // Keep elements 10% away from edges
            y: Math.random() * 80 + 10
        };
    };

    // Create mini characters
    for (let i = 0; i < numElements; i++) {
        const character = document.createElement('img');
        character.src = 'assets/images/trans.png';
        character.className = 'floating-character';
        const pos = getRandomPosition();
        character.style.left = `${pos.x}vw`;
        character.style.top = `${pos.y}vh`;
        container.appendChild(character);
    }

    // Create emoji elements
    const emojis = ['💩', '🦄'];
    for (let i = 0; i < numElements * 2; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[i % emojis.length];
        const pos = getRandomPosition();
        emoji.style.left = `${pos.x}vw`;
        emoji.style.top = `${pos.y}vh`;
        container.appendChild(emoji);
    }
}

// Initialize floating elements
createFloatingElements();

// Initialize Particles.js with custom shape
particlesJS('particles-js', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#FF69B4', '#9B4DCA', '#FFD700']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.2,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#FF69B4',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 100,
                size: 6,
                duration: 0.3,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Character Animation
const mainCharacter = document.querySelector('.main-character');
if (mainCharacter) {
    // Initial animation
    gsap.from(mainCharacter, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.8
    });

    // Hover effect
    mainCharacter.addEventListener('mouseover', () => {
        gsap.to(mainCharacter, {
            scale: 1.1,
            rotation: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    mainCharacter.addEventListener('mouseout', () => {
        gsap.to(mainCharacter, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// Logo Animation
const logoImg = document.querySelector('.logo-img');
if (logoImg) {
    gsap.from(logoImg, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
    });

    // Hover effect
    logoImg.addEventListener('mouseover', () => {
        gsap.to(logoImg, {
            rotation: 360,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// Add glowing effect to buttons
const buttons = document.querySelectorAll('.primary-button, .secondary-button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        gsap.to(button, {
            boxShadow: '0 0 30px rgba(255, 105, 180, 0.6)',
            duration: 0.3
        });
    });

    button.addEventListener('mouseout', () => {
        gsap.to(button, {
            boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
            duration: 0.3
        });
    });
}); 