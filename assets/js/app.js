document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        setTimeout(() => { document.getElementById('preloader').classList.add('loaded'); }, 800);
    });
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 80) { navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
        if (scrollY > 500) { backToTop.classList.add('visible'); } else { backToTop.classList.remove('visible'); }
        updateActiveNavLink();
    });
    backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.addEventListener('click', () => { navToggle.classList.toggle('active'); navMenu.classList.toggle('active'); });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => { navToggle.classList.remove('active'); navMenu.classList.remove('active'); });
    });
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) { link.classList.add('active'); }
                });
            }
        });
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
        });
    });
    const observerOptions = { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach(el => { observer.observe(el); });
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); counterObserver.unobserve(entry.target); } });
    }, { threshold: 0.5 });
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) { counterObserver.observe(statsSection); }
    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) { counter.textContent = target; clearInterval(timer); }
                else { counter.textContent = Math.floor(current); }
            }, 16);
        });
    }
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) { item.classList.remove('hidden'); item.style.position = 'relative'; }
                else { item.classList.add('hidden'); setTimeout(() => { if (item.classList.contains('hidden')) { item.style.position = 'absolute'; } }, 400); }
            });
        });
    });
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const cards = document.querySelectorAll('.testimonial-card');
    let currentSlide = 0;
    const totalSlides = cards.length;
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testimonial-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        document.querySelectorAll('.testimonial-dot').forEach((dot, i) => { dot.classList.toggle('active', i === currentSlide); });
    }
    prevBtn.addEventListener('click', () => { goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1); });
    nextBtn.addEventListener('click', () => { goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1); });
    let autoSlide = setInterval(() => { goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1); }, 5000);
    const slider = document.querySelector('.testimonial-slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => { autoSlide = setInterval(() => { goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1); }, 5000); });
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            const mailtoLink = 'mailto:hello@a4h.co.in?subject=' + encodeURIComponent(subject + ' - ' + name) + '&body=' + encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
            window.location.href = mailtoLink;
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.style.background = '#4CAF50';
            setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; contactForm.reset(); }, 3000);
        });
    }
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const hero = document.querySelector('.hero-content');
        if (hero && scrollY < window.innerHeight) { hero.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)'; hero.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8)); }
    });
});
