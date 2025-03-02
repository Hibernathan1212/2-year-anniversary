document.addEventListener("DOMContentLoaded", function () {
    // Add fade-in animation to all sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                setTimeout(() => {
                    entry.target.style.transform = 'none';
                }, 1000);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Initialize Floating Elements
    function initializeFloatingElements() {
        const hearts = Array(20).fill(null).map(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '♥';
            heart.style.position = 'fixed';
            document.body.appendChild(heart);
            return heart;
        });
        
        const flowers = Array(15).fill(null).map(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = '🌹';
            flower.style.position = 'fixed';
            document.body.appendChild(flower);
            return flower;
        });
        
        // Animation loop
        setInterval(() => {
            const hearts = document.querySelectorAll('.heart');
            const flowers = document.querySelectorAll('.flower');
            
            hearts.forEach(heart => {
                heart.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            });
            
            flowers.forEach(flower => {
                flower.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            });
        }, 50);
    }

    // Quote Slider
    // let currentQuote = 0;
    // const quotes = document.querySelectorAll('.quote');
    // const nextQuoteBtn = document.querySelector('.next-quote');
    // const prevQuoteBtn = document.querySelector('.prev-quote');
    // const quoteDots = document.querySelectorAll('.dot');

    // function showQuote(index) {
    //     quotes.forEach(q => q.style.display = 'none');
    //     quotes[index].style.display = 'block';
    //     quoteDots.forEach((dot, i) => {
    //         dot.classList.remove('active');
    //         if (i === index) dot.classList.add('active');
    //     });
    // }

    // nextQuoteBtn.addEventListener("click", () => {
    //     currentQuote = (currentQuote + 1) % quotes.length;
    //     showQuote(currentQuote);
    // });

    // prevQuoteBtn.addEventListener("click", () => {
    //     currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    //     showQuote(currentQuote);
    // });

    // showQuote(currentQuote);

    // Gallery Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // // Initialize floating elements
    // function initializeFloatingElements() {
    //     const hearts = Array(20).fill(null).map(() => {
    //         const heart = document.createElement('div');
    //         heart.className = 'heart';
    //         heart.textContent = '♥';
    //         heart.style.position = 'fixed';
    //         document.body.appendChild(heart);
    //         return heart;
    //     });
        
    //     const flowers = Array(15).fill(null).map(() => {
    //         const flower = document.createElement('div');
    //         flower.className = 'flower';
    //         flower.textContent = '🌹';
    //         flower.style.position = 'fixed';
    //         document.body.appendChild(flower);
    //         return flower;
    //     });
        
    //     setInterval(() => {
    //         const hearts = document.querySelectorAll('.heart');
    //         const flowers = document.querySelectorAll('.flower');
            
    //         hearts.forEach(heart => {
    //             heart.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    //         });
            
    //         flowers.forEach(flower => {
    //             flower.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
    //         });
    //     }, 50);
    // }

    // Initialize Floating Elements
    // initializeFloatingElements();

    document.getElementById('heartButton').addEventListener('click', function() {
        for (let i = 0; i < 200; i++) {
            createConfetti();
        }
        
        // Display a sweet message
        setTimeout(function() {
            alert("I love you more. Happy 2 Year Anniversary Baby! ♥");
        }, 500);
    });
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random position
        confetti.style.position = 'fixed';  
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '0';
        
        // Random color
        const colors = ['#e3bac6', '#f7cac9', '#92a8d1', '#88b04b', '#f5df4d', '#5b5ea6'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 10 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        // Random rotation
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        // Random animation duration
        // confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animation = `confetti ` + (Math.random() * 3 + 2) + `s ease-in-out`;

        document.body.appendChild(confetti);
        
        // Remove after animation completes
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    
});