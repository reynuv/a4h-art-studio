/* ============================================================
   A4H&S Art Studio â Gallery JavaScript
   ============================================================ */

/* ââ Painting Data ââ */
const PAINTINGS = [
  {
    id: 1,
    file: 'assets/images/paintings/radha-krishna-mural.jpg',
    title: 'Radha Krishna Mural',
    size: '24 x 84',
    medium: 'Mixed Media',
    mediumFull: 'Mixed Media Acrylic base on canvas mounted on wooden ply with 3D clay elements',
    category: 'mixed-media',
    description: 'An extraordinary, monumental work stretching seven feet in width a true mural in concept and execution. The eternal love of Radha and Krishna is rendered in three dimensions, with hand-sculpted clay elements emerging from the acrylic base to create a work of astonishing depth and devotional power. Faces, garments, and ornaments rise from the surface, transforming painting into sculpture. This is a centrepiece for those who seek art that transcends categories and fills a space with divine presence.'
  },
  {
    id: 2,
    file: 'assets/images/paintings/pichwai-holi.jpg',
    title: 'Pichwai â Holi',
    size: '48 X 60',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Canvas',
    category: 'acrylic',
    description: 'A magnificent large-format celebration of Holi rendered in the devotional Pichwai tradition. This work explodes with the joyful chaos of colour â clouds of crimson, saffron, emerald, and indigo swirling around divine figures in a festival of pure life and love. The Pichwai aesthetic, traditionally created as temple adornments, elevates the festival to the sacred, reminding us that Holi is ultimately a celebration of the divine.'
  },
  {
    id: 3,
    file: 'assets/images/paintings/village-in-oil.jpg',
    title: 'Village in Oil',
    size: '36 X 48',
    medium: 'Oil',
    mediumFull: 'Oil on Canvas Board',
    category: 'oil',
    description: 'A sweeping panorama of village life rendered in the full richness of oil on a grand canvas. Daily rhythms, architectural textures, the play of light on humble surfaces â all captured with a painter\'s eye for the extraordinary within the ordinary. This large-format work invites the viewer to step inside and wander through its sun-warmed lanes and living scenes.'
  },
  {
    id: 4,
    file: 'assets/images/paintings/tree-of-life.jpg',
    title: 'Tree of Life',
    size: '24 X 48',
    medium: 'Mixed Media',
    mediumFull: 'Mixed Media â Acrylic on Stretched Canvas with Mandala Dot Art',
    category: 'mixed-media',
    description: 'The ancient symbol of life, connection, and growth realised through a breathtaking fusion of acrylic painting and intricate mandala dot art. Every dot is placed with meditative precision; the whole speaks to the interconnectedness of all living things. The tree\'s branches become a mandala; the mandala becomes a universe. A work of extraordinary patience and spiritual vision.'
  },
  {
    id: 5,
    file: 'assets/images/paintings/sunrise-on-mountain.jpg',
    title: 'Sunrise on Mountain',
    size: '24 X 48',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Canvas Board',
    category: 'acrylic',
    description: 'The world remade in fire and gold as dawn breaks over mountain peaks. This panoramic acrylic painting stretches across the canvas to capture the full drama of sunrise at altitude â skies ablaze with amber and rose, peaks bathed in first light, valleys still wrapped in the cool blue of departing night. A work of breathtaking scale and beauty.'
  },
  {
    id: 6,
    file: 'assets/images/paintings/rudra.JPG',
    title: 'Rudra',
    size: '36 X 24',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Stretched Canvas',
    category: 'acrylic',
    description: 'Rudra â the Vedic deity of storms and transformation â is rendered with fierce, dynamic energy on stretched canvas. Bold acrylics in deep ochres, fiery reds, and cosmic blues convey the raw power of this primordial force. The composition commands attention, channelling the awe-inspiring weight of divine fury and the promise of renewal that follows.'
  },
  {
    id: 7,
    file: 'assets/images/paintings/face-in-flowers.jpg',
    title: 'Face in Flowers',
    size: '24 X 36',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Stretched Canvas',
    category: 'acrylic',
    description: 'A celebration of femininity and nature in perfect harmony. A face emerges dreamily from an abundance of blooms, each petal painted with loving detail in vibrant acrylics. The boundary between woman and flower dissolves, creating a lyrical meditation on beauty, growth, and the eternal connection between the human spirit and the natural world.'
  },
  {
    id: 8,
    file: 'assets/images/paintings/the-ajanta.jpg',
    title: 'The Ajanta',
    size: '24 X 36',
    medium: 'Oil',
    mediumFull: 'Oil on Canvas Board',
    category: 'oil',
    description: 'Inspired by the ancient cave frescoes of Ajanta, this oil painting breathes new life into India\'s 2,000-year-old artistic heritage. The work captures the graceful elegance of Ajanta\'s iconic figures â their flowing garments, ornate jewellery, and soulful expressions â reimagined through the luminous depth of oil on canvas.'
  },
  {
    id: 9,
    file: 'assets/images/paintings/the-buddha.jpg',
    title: 'The Buddha',
    size: '24 X 36',
    medium: 'Oil',
    mediumFull: 'Oil on Canvas Board',
    category: 'oil',
    description: 'A masterful oil painting that explores the timeless wisdom of the Buddha. Rich, luminous oils create a meditative atmosphere, with the figure rendered in contemplative repose. The artist\'s brush captures the ineffable serenity of enlightenment, using traditional oil techniques to build layers of depth and spiritual resonance that deepen with every viewing.'
  },
  {
    id: 10,
    file: 'assets/images/paintings/woman-of-power.jpg',
    title: 'Woman of Power',
    size: '24 X 36',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Canvas Board',
    category: 'acrylic',
    description: 'A commanding vision of feminine strength and sovereignty. Bold, confident acrylics build a figure that radiates authority and grace in equal measure. This is womanhood not as passive beauty but as active, creative force â a celebration of inner fire, agency, and the power that flows from deep self-knowing.'
  },
  {
    id: 11,
    file: 'assets/images/paintings/women-and-emotions.jpg',
    title: 'Women and Emotions',
    size: 'Original',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Stretched Canvas',
    category: 'acrylic',
    description: 'A powerful exploration of the emotional landscape of womanhood. Through bold, expressive acrylics, the artist charts the full spectrum of feminine experience â joy, sorrow, strength, vulnerability â rendered with unflinching honesty and extraordinary empathy. This work speaks to the universal depths of human feeling through a uniquely feminine lens.'
  },
  {
    id: 12,
    file: 'assets/images/paintings/tribal-woman.jpg',
    title: 'Tribal Woman',
    size: '18 X 24',
    medium: 'Oil',
    mediumFull: 'Oil on Canvas Board',
    category: 'oil',
    description: 'A portrait of dignity, heritage, and quiet strength. Rendered in rich oils, this work celebrates the beauty of tribal womanhood â the elaborate adornments, the wisdom in the eyes, the bearing that speaks of generations of culture and resilience. A profound tribute to the keepers of ancient traditions and the living repositories of human heritage.'
  },
  {
    id: 13,
    file: 'assets/images/paintings/misty-woods.jpg',
    title: 'Misty Woods',
    size: '18 X 24',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Canvas Board',
    category: 'acrylic',
    description: 'Step into a forest where morning mist softens every edge and light filters through ancient trees in golden shafts. Painted in lush acrylics, this atmospheric work evokes the hushed magic of woodland at dawn â the scent of damp earth, the stillness before the world awakens, the sense of being held within nature\'s gentle embrace.'
  },
  {
    id: 14,
    file: 'assets/images/paintings/icy-falls.jpg',
    title: 'Icy Falls',
    size: '18 X 24',
    medium: 'Acrylic',
    mediumFull: 'Acrylic on Canvas Board',
    category: 'acrylic',
    description: 'Cascading water captured at the moment of its most dramatic descent, rendered in crystalline acrylics that catch every glint of ice and tumbling current. The painting conveys both the relentless power of falling water and its ethereal beauty when transformed by cold into something sculptural and otherworldly.'
  },
  {
    id: 15,
    file: 'assets/images/paintings/evening-by-the-river.jpg',
    title: 'Evening by the River',
    size: 'Original',
    medium: 'Oil',
    mediumFull: 'Oil on Canvas Board',
    category: 'oil',
    description: 'The golden hour distilled into oil paint. The artist captures that fleeting time when river and sky merge in a symphony of amber, copper, and fading rose. Reflections dance on the water\'s surface as evening draws its gentle veil across the landscape. A work of timeless pastoral beauty, executed with the luminous depth that only oils can achieve.'
  },
  {
    id: 16,
    file: 'assets/images/paintings/3d-buddha-sculpture.jpg',
    title: '3D Buddha Sculpture',
    size: '24 X 36',
    medium: 'Mixed Media',
    mediumFull: 'Mixed Media â Acrylic base on canvas mounted on wooden ply with 3D clay elements',
    category: 'mixed-media',
    description: 'A transcendent piece where spirituality meets sculptural artistry. The serene Buddha figure emerges from the canvas in three dimensions, crafted with meticulous clay work over an acrylic foundation. Intimate in scale yet profound in presence, each clay element is hand-sculpted to create depth and texture that invites touch and rewards close contemplation.'
  }
];

/* ââ State ââ */
let currentIndex = 0;
let filteredPaintings = [...PAINTINGS];
let currentFilter = 'all';

/* ââ DOM Ready ââ */
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initMobileNav();
  initGallery();
  initFilters();
  initLightbox();
  initModal();
  initReveal();
  initCounters();
});

/* ââ Preloader ââ */
function initPreloader() {
  const pre = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      pre.classList.add('hidden');
      document.body.style.overflow = '';
    }, 800);
  });
  document.body.style.overflow = 'hidden';
}

/* ââ Navbar ââ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ââ Mobile Nav ââ */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('overlay');

  function openNav() {
    mobileNav.classList.add('open');
    overlay.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    mobileNav.classList.remove('open');
    if (!document.getElementById('lightbox').classList.contains('open') &&
        !document.getElementById('enquiryModal').classList.contains('open')) {
      overlay.classList.remove('active');
    }
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    mobileNav.classList.contains('open') ? closeNav() : openNav();
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  overlay.addEventListener('click', () => {
    closeNav();
    closeLightbox();
    closeModal();
  });
}

/* ââ Build Gallery Grid ââ */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  PAINTINGS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = `gallery-card reveal`;
    card.dataset.category = p.category;
    card.dataset.index = i;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img
          src="${p.file}"
          alt="${p.title}"
          loading="${i < 6 ? 'eager' : 'lazy'}"
        />
        <div class="card-overlay">
          <span class="card-title">${p.title}</span>
          <span class="card-medium">${p.mediumFull}</span>
          <span class="card-btn">View Work &#8594;</span>
        </div>
      </div>
      <div class="card-strip">
        <span class="card-title">${p.title}</span>
        <span class="card-medium">${p.medium} &nbsp;Â·&nbsp; ${p.size}</span>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(i));
    grid.appendChild(card);
  });
}

/* ââ Filters ââ */
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilter(currentFilter);
    });
  });
}

function applyFilter(filter) {
  const cards = document.querySelectorAll('.gallery-card');
  filteredPaintings = filter === 'all'
    ? [...PAINTINGS]
    : PAINTINGS.filter(p => p.category === filter);

  cards.forEach(card => {
    const cat = card.dataset.category;
    const show = filter === 'all' || cat === filter;
    card.classList.toggle('hidden', !show);
  });
}

/* ââ Lightbox ââ */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const lbClose = lb.querySelector('.lb-close');
  const lbPrev = lb.querySelector('.lb-prev');
  const lbNext = lb.querySelector('.lb-next');
  const lbBuy = document.getElementById('lbBuy');

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', () => navigateLightbox(-1));
  lbNext.addEventListener('click', () => navigateLightbox(1));
  lbBuy.addEventListener('click', () => {
    const p = PAINTINGS[currentIndex];
    openModal(p);
  });

  lb.addEventListener('click', e => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   navigateLightbox(-1);
    if (e.key === 'ArrowRight')  navigateLightbox(1);
  });
}

function openLightbox(globalIndex) {
  currentIndex = globalIndex;
  populateLightbox(PAINTINGS[currentIndex]);

  const lb = document.getElementById('lightbox');
  const overlay = document.getElementById('overlay');
  lb.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  const overlay = document.getElementById('overlay');
  lb.classList.remove('open');
  if (!document.getElementById('enquiryModal').classList.contains('open') &&
      !document.getElementById('mobile-nav').classList.contains('open')) {
    overlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  // Navigate only within filtered set
  const visibleIndices = filteredPaintings.map(p =>
    PAINTINGS.findIndex(orig => orig.id === p.id)
  );
  let pos = visibleIndices.indexOf(currentIndex);
  if (pos === -1) pos = 0;
  pos = (pos + dir + visibleIndices.length) % visibleIndices.length;
  currentIndex = visibleIndices[pos];
  populateLightbox(PAINTINGS[currentIndex]);
}

function populateLightbox(p) {
  const img = document.getElementById('lbImage');
  img.classList.add('loading');
  img.onload = () => img.classList.remove('loading');
  img.src = p.file;
  img.alt = p.title;

  document.getElementById('lbMedium').textContent = p.mediumFull;
  document.getElementById('lbTitle').textContent = p.title;
  document.getElementById('lbSize').textContent = p.size;
  document.getElementById('lbDesc').textContent = p.description;
}

/* ââ Enquiry Modal ââ */
function initModal() {
  const modal = document.getElementById('enquiryModal');
  const closeBtn = modal.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeModal);

  // General enquire button (contact strip)
  document.getElementById('generalEnquire').addEventListener('click', () => {
    openModal(null);
  });
}

function openModal(painting) {
  const modal = document.getElementById('enquiryModal');
  const overlay = document.getElementById('overlay');
  const titleEl = document.getElementById('modalTitle');
  const subtitleEl = document.getElementById('modalSubtitle');
  const subjectInput = document.getElementById('formSubject');
  const paintingInput = document.getElementById('formPainting');

  if (painting) {
    titleEl.textContent = 'Enquire About This Work';
    subtitleEl.textContent = painting.title + '  Â·  ' + painting.size;
    subjectInput.value = 'Buy Painting : ' + painting.title;
    paintingInput.value = painting.title + ' (' + painting.size + ')';
  } else {
    titleEl.textContent = 'Send an Enquiry';
    subtitleEl.textContent = 'General enquiry or commission request';
    subjectInput.value = 'Enquiry â A4H&S Art Studio';
    paintingInput.value = 'General enquiry';
  }

  modal.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close lightbox if open
  document.getElementById('lightbox').classList.remove('open');
}

function closeModal() {
  const modal = document.getElementById('enquiryModal');
  const overlay = document.getElementById('overlay');
  modal.classList.remove('open');
  if (!document.getElementById('lightbox').classList.contains('open') &&
      !document.getElementById('mobile-nav').classList.contains('open')) {
    overlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

/* ââ IntersectionObserver: Reveal on scroll ââ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger gallery cards slightly
        const delay = entry.target.classList.contains('gallery-card')
          ? (Array.from(document.querySelectorAll('.gallery-card')).indexOf(entry.target) % 3) * 80
          : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ââ Counter Animation ââ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
