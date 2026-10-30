// ============================================
// Dr. Gamze ALAK — Academic Portfolio Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const handleNavScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // --- Theme Toggle ---
    const themeToggleBtn = document.getElementById('themeToggle');

    // ODKAEP theme-sensitive logo switcher (uses data-light-src / data-dark-src attributes)
    const updateOdkaepLogo = (isDark) => {
        const img = document.getElementById('odkaep-main-logo');
        if (!img) return;
        img.src = isDark
            ? (img.dataset.darkSrc || img.src)
            : (img.dataset.lightSrc || img.src);
    };

    // Apply logo on initial load
    updateOdkaepLogo(document.documentElement.getAttribute('data-theme') === 'dark');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            if (newTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }

            localStorage.setItem('theme', newTheme);
            updateOdkaepLogo(newTheme === 'dark');
        });
    }

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');

    const highlightNav = () => {
        const scrollY = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navAnchors.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === `#${id}`) {
                        a.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });

    // --- Scroll reveal animation ---
    // --- Scroll reveal animation ---
    // --- Scroll reveal animation ---
    // --- Scroll reveal animation ---
    // --- Scroll reveal animation ---
    const initScrollReveal = () => {
        // Child journey milestones and paths representing developmental growth and intervention
        const doodleTemplates = [
            {
                id: "baby",
                cls: "doodle-baby",
                viewBox: "0 0 140 100",
                style: "width: 140px; height: 100px;",
                html: '<circle cx="25" cy="25" r="12" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><path d="M 25 6 L 25 10 M 25 40 L 25 44 M 6 25 H 10 M 40 25 H 44" stroke="url(#grad-warm)" stroke-width="2" stroke-linecap="round"/><circle cx="85" cy="45" r="9" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><path d="M 85 54 L 85 75 M 85 60 L 73 66 M 85 60 L 97 66 M 85 75 L 75 90 M 85 75 L 95 90" fill="none" stroke="url(#grad-warm)" stroke-width="2.5" stroke-linecap="round"/><rect x="110" y="70" width="18" height="18" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><text x="115" y="84" font-family="sans-serif" font-size="11" font-weight="bold" fill="url(#grad-warm)">A</text>'
            },
            {
                id: "kite",
                cls: "doodle-kite",
                viewBox: "0 0 100 180",
                style: "width: 100px; height: 180px;",
                html: '<circle cx="35" cy="135" r="8" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><path d="M 35 143 L 35 162 M 35 148 L 22 153 M 35 148 L 48 138 M 35 162 L 25 178 M 35 162 L 45 178" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linecap="round"/><path d="M 50 135 Q 65 110, 55 80 T 70 30" fill="none" stroke="url(#grad-rainbow)" stroke-dasharray="2,2" stroke-width="1.8"/><path d="M 70 30 L 85 18 L 70 5 L 55 18 Z M 55 18 L 85 18 M 70 5 L 70 30" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 70 30 Q 75 40, 72 48 T 76 56" fill="none" stroke="url(#grad-rainbow)" stroke-width="1.8"/>'
            },
            {
                id: "solve-puzzle",
                cls: "doodle-solve-puzzle",
                viewBox: "0 0 120 100",
                style: "width: 120px; height: 100px;",
                html: '<circle cx="35" cy="45" r="8" fill="none" stroke="url(#grad-growth)" stroke-width="2.5"/><path d="M 35 53 L 35 72 M 35 58 L 23 64 M 35 58 L 50 62 M 35 72 L 25 88 M 35 72 L 45 88" stroke="url(#grad-growth)" stroke-width="2.5" stroke-linecap="round"/><path d="M 70 50 C 72 48, 75 50, 78 48 C 77 40, 85 36, 90 48 C 92 50, 95 48, 98 50 C 99 52, 97 56, 98 58 C 108 56, 108 68, 98 66 C 97 68, 99 72, 98 74 C 95 76, 92 74, 90 76 C 88 84, 80 84, 78 76 C 75 74, 72 76, 70 74 C 68 72, 70 68, 68 66 C 58 68, 58 56, 68 58 C 70 56, 68 52, 70 50" fill="none" stroke="url(#grad-growth)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 83 58 L 83 48" stroke="url(#grad-growth)" stroke-width="2"/><circle cx="83" cy="45" r="3" fill="none" stroke="url(#grad-growth)" stroke-width="2"/>'
            },
            {
                id: "catch",
                cls: "doodle-catch",
                viewBox: "0 0 100 130",
                style: "width: 100px; height: 130px;",
                html: '<circle cx="40" cy="85" r="8" fill="none" stroke="url(#grad-sky)" stroke-width="2.5"/><path d="M 40 93 L 40 112 M 40 98 Q 55 80, 65 72 M 40 98 L 22 92 M 40 112 L 30 128 M 40 112 L 50 128" stroke="url(#grad-sky)" stroke-width="2.5" stroke-linecap="round"/><circle cx="68" cy="68" r="8" fill="none" stroke="url(#grad-sky)" stroke-width="2"/><path d="M 65 74 L 55 84" stroke="url(#grad-sky)" stroke-width="2.5"/><path d="M 75 35 Q 85 25, 85 35 Q 85 45, 75 40 M 75 40 Q 65 30, 65 40 Q 65 50, 75 45" fill="none" stroke="url(#grad-sky)" stroke-width="2.2" stroke-linecap="round"/>'
            },
            {
                id: "phone",
                cls: "doodle-phone",
                viewBox: "0 0 180 80",
                style: "width: 180px; height: 80px;",
                html: '<circle cx="20" cy="35" r="7" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5"/><path d="M 20 42 L 20 60 M 20 47 L 35 44 M 20 60 L 10 75 M 20 60 L 30 75" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linecap="round"/><rect x="33" y="38" width="10" height="10" rx="1" fill="none" stroke="url(#grad-sunset)" stroke-width="2"/><path d="M 43 43 Q 75 25, 100 45 T 147 43" fill="none" stroke="url(#grad-sunset)" stroke-dasharray="3,3" stroke-width="1.8"/><rect x="147" y="38" width="10" height="10" rx="1" fill="none" stroke="url(#grad-sunset)" stroke-width="2"/><circle cx="160" cy="35" r="7" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5"/><path d="M 160 42 L 160 60 M 160 47 L 147 44 M 160 60 L 150 75 M 160 60 L 170 75" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linecap="round"/>'
            },
            {
                id: "bicycle",
                cls: "doodle-bicycle",
                viewBox: "0 0 130 90",
                style: "width: 130px; height: 90px;",
                html: '<circle cx="35" cy="65" r="14" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><circle cx="95" cy="65" r="14" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><path d="M 35 65 L 55 42 L 95 65 M 55 42 L 85 42 L 95 65 M 85 42 L 80 25 M 55 42 L 52 35 M 52 35 H 62" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="65" cy="20" r="7" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><path d="M 65 27 Q 60 40, 55 45 M 65 29 L 80 34 M 55 45 L 68 55" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linecap="round"/><path d="M 15 80 L 15 72 M 115 80 L 115 70" stroke="url(#grad-rainbow)" stroke-width="2"/><circle cx="15" cy="70" r="2" fill="none" stroke="url(#grad-rainbow)" stroke-width="2"/><circle cx="115" cy="68" r="2" fill="none" stroke="url(#grad-rainbow)" stroke-width="2"/>'
            },
            {
                id: "reading-tree",
                cls: "doodle-reading-tree",
                viewBox: "0 0 120 150",
                style: "width: 120px; height: 150px;",
                html: '<path d="M 85 80 L 85 135" stroke="url(#grad-growth)" stroke-width="4" stroke-linecap="round"/><path d="M 85 80 C 70 80, 55 65, 65 50 C 55 35, 75 20, 85 30 C 95 20, 115 35, 105 50 C 115 65, 100 80, 85 80 Z" fill="none" stroke="url(#grad-growth)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 80 50 Q 85 45, 90 55 M 75 60 H 95" stroke="url(#grad-growth)" stroke-width="1.8"/><circle cx="45" cy="115" r="7" fill="none" stroke="url(#grad-growth)" stroke-width="2.5"/><path d="M 45 122 C 40 125, 33 135, 45 135 M 45 125 L 30 128" fill="none" stroke="url(#grad-growth)" stroke-width="2.5" stroke-linecap="round"/><path d="M 22 128 L 30 125 L 38 128 M 30 125 L 30 134" fill="none" stroke="url(#grad-growth)" stroke-width="2"/>'
            },
            {
                id: "graduate",
                cls: "doodle-graduate",
                viewBox: "0 0 100 100",
                style: "width: 100px; height: 100px;",
                html: '<path d="M 50 18 L 85 30 L 50 42 L 15 30 Z" fill="none" stroke="url(#grad-warm)" stroke-width="2.5" stroke-linejoin="round"/><rect x="36" y="36" width="28" height="15" fill="none" stroke="url(#grad-warm)" stroke-width="2.5" rx="1"/><path d="M 50 30 Q 30 36, 25 53" fill="none" stroke="url(#grad-warm)" stroke-width="1.8" stroke-linecap="round"/><path d="M 35 75 Q 50 68, 65 75 M 35 80 Q 50 73, 65 80 M 35 75 L 35 80 M 65 75 L 65 80" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><path d="M 20 55 L 22 58 L 25 55 L 23 52 Z M 80 55 L 82 58 L 85 55 L 83 52 Z" fill="url(#grad-warm)"/>'
            },
            {
                id: "paper-plane",
                cls: "doodle-paper-plane",
                viewBox: "0 0 120 80",
                style: "width: 120px; height: 80px;",
                html: '<path d="M 20 45 L 85 20 L 55 60 L 50 48 L 20 45 Z M 50 48 L 85 20 M 50 48 L 55 53 L 55 60" fill="none" stroke="url(#grad-sky)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M 15 55 C 8 50, 10 38, 22 35 T 45 42" fill="none" stroke="url(#grad-sky)" stroke-dasharray="3,3" stroke-width="1.8"/>'
            },
            {
                id: "rocket",
                cls: "doodle-rocket",
                viewBox: "0 0 100 120",
                style: "width: 100px; height: 120px;",
                html: '<path d="M 50 15 C 60 32, 60 62, 60 75 L 40 75 C 40 62, 40 32, 50 15 Z" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linejoin="round"/><circle cx="50" cy="42" r="5" fill="none" stroke="url(#grad-sunset)" stroke-width="2"/><path d="M 40 65 L 28 78 L 40 78" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 60 65 L 72 78 L 60 78" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 45 78 Q 38 90, 48 88 T 50 100 Q 52 90, 55 78" fill="none" stroke="url(#grad-sunset)" stroke-width="2" stroke-linecap="round"/>'
            },
            {
                id: "nurture",
                cls: "doodle-nurture",
                viewBox: "0 0 120 120",
                style: "width: 120px; height: 120px;",
                html: '<rect x="15" y="30" width="22" height="18" rx="2" fill="none" stroke="url(#grad-growth)" stroke-width="2.5"/><path d="M 37 38 L 50 33 M 15 35 H 8 V 43 H 15" fill="none" stroke="url(#grad-growth)" stroke-width="2.5"/><path d="M 58 42 L 62 48 M 68 40 L 61 44 M 63 36 L 66 42" stroke="url(#grad-growth)" stroke-dasharray="2,2" stroke-width="1.5"/><path d="M 90 70 Q 90 105, 90 105" stroke="url(#grad-growth)" stroke-width="3"/><path d="M 90 85 Q 80 80, 83 72 C 86 72, 88 77, 90 85 Z" fill="none" stroke="url(#grad-growth)" stroke-width="2.2"/><circle cx="90" cy="55" r="8" fill="none" stroke="url(#grad-growth)" stroke-width="2.5"/><path d="M 90 47 C 86 42, 94 42, 90 47 Z M 90 63 C 86 68, 94 68, 90 63 Z M 82 55 C 77 51, 77 59, 82 55 Z M 98 55 C 103 51, 103 59, 98 55 Z" fill="none" stroke="url(#grad-growth)" stroke-width="2.2" stroke-linecap="round"/>'
            },
            {
                id: "reach",
                cls: "doodle-reach",
                viewBox: "0 0 100 150",
                style: "width: 100px; height: 150px;",
                html: '<path d="M 30 40 A 25 25 0 1 0 70 80 A 30 30 0 1 1 30 40" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><circle cx="50" cy="45" r="6" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><path d="M 50 51 Q 48 65, 42 70 M 50 53 L 62 40 M 50 70 L 60 75" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linecap="round"/><path d="M 72 25 L 75 30 L 80 30 L 76 33 L 78 38 L 72 35 L 66 38 L 68 33 L 64 30 L 69 30 Z" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.2" stroke-linejoin="round"/>'
            },
            {
                id: "stack-blocks",
                cls: "doodle-stack-blocks",
                viewBox: "0 0 100 100",
                style: "width: 100px; height: 100px;",
                html: '<rect x="15" y="65" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><rect x="40" y="65" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><rect x="65" y="65" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><rect x="28" y="40" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><rect x="52" y="40" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><rect x="40" y="15" width="22" height="22" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><path d="M 50 2 L 52 6 L 56 6 L 53 9 L 55 13 L 50 11 L 45 13 L 47 9 L 44 6 L 48 6 Z" fill="url(#grad-warm)"/>'
            },
            {
                id: "balloons",
                cls: "doodle-balloons",
                viewBox: "0 0 100 140",
                style: "width: 100px; height: 140px;",
                html: '<path d="M 35 25 C 20 25, 15 38, 15 48 C 15 60, 25 65, 35 65 C 45 65, 55 60, 55 48 C 55 38, 50 25, 35 25 Z" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5"/><path d="M 65 35 C 53 35, 48 45, 48 55 C 48 65, 55 70, 65 70 C 75 70, 82 65, 82 55 C 82 45, 77 35, 65 35 Z" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5"/><path d="M 35 65 Q 40 85, 48 105 L 50 120" fill="none" stroke="url(#grad-sunset)" stroke-width="1.8"/><path d="M 65 70 Q 58 92, 52 108 L 50 120" fill="none" stroke="url(#grad-sunset)" stroke-width="1.8"/><circle cx="50" cy="125" r="5" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5"/><path d="M 50 130 L 50 140 M 50 132 L 40 122 M 50 132 L 60 122" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linecap="round"/>'
            },
            {
                id: "mail",
                cls: "doodle-mail",
                viewBox: "0 0 100 100",
                style: "width: 100px; height: 100px;",
                html: '<rect x="20" y="35" width="60" height="42" rx="3" fill="none" stroke="url(#grad-sky)" stroke-width="2.5"/><path d="M 20 35 L 50 58 L 80 35" fill="none" stroke="url(#grad-sky)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 50 24 C 52 15, 65 15, 65 24 C 65 32, 55 38, 50 42 C 45 38, 35 32, 35 24 C 35 15, 48 15, 50 24 Z" fill="none" stroke="url(#grad-sky)" stroke-width="2" stroke-linecap="round"/>'
            },
            {
                id: "house-sun",
                cls: "doodle-house-sun",
                viewBox: "0 0 110 110",
                style: "width: 110px; height: 110px;",
                html: '<circle cx="85" cy="30" r="10" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5"/><path d="M 85 14 L 85 18 M 85 42 L 85 46 M 69 30 H 73 M 97 30 H 101" stroke="url(#grad-rainbow)" stroke-width="2" stroke-linecap="round"/><path d="M 20 60 L 50 38 L 80 60 Z" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 25 60 V 88 H 75 V 60" fill="none" stroke="url(#grad-rainbow)" stroke-width="2.5" stroke-linejoin="round"/><rect x="42" y="68" width="16" height="20" fill="none" stroke="url(#grad-rainbow)" stroke-width="2"/><circle cx="53" cy="78" r="1.2" fill="currentColor"/>'
            },
            {
                id: "footprint",
                cls: "doodle-footprint",
                viewBox: "0 0 40 60",
                html: '<path d="M 15 45 C 12 40, 10 32, 12 25 C 14 18, 20 18, 22 25 C 24 32, 22 40, 19 45 Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/><circle cx="18" cy="10" r="2.5" fill="currentColor"/><circle cx="24" cy="12" r="2.2" fill="currentColor"/><circle cx="28" cy="16" r="1.8" fill="currentColor"/>'
            },
            {
                id: "trail",
                cls: "doodle-trail",
                viewBox: "0 0 50 50",
                html: '<path d="M 5 25 Q 25 5, 45 25" fill="none" stroke="currentColor" stroke-dasharray="2,2" stroke-width="1.8"/><path d="M 45 25 L 47 28 L 50 25 L 47 22 Z" fill="currentColor"/>'
            },
            {
                id: "open-book",
                cls: "doodle-open-book",
                viewBox: "0 0 120 100",
                style: "width: 120px; height: 100px;",
                html: '<path d="M 60 75 Q 35 70, 15 80 V 30 Q 35 20, 60 25 Q 85 20, 105 30 V 80 Q 85 70, 60 75 Z" fill="none" stroke="url(#grad-warm)" stroke-width="2.5" stroke-linejoin="round"/><path d="M 60 25 V 75" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><path d="M 25 40 H 50 M 25 50 H 50 M 25 60 H 45 M 70 40 H 95 M 70 50 H 95 M 75 60 H 95" fill="none" stroke="url(#grad-warm)" stroke-width="1.8" stroke-linecap="round"/><path d="M 60 18 L 62 10 L 66 12 L 63 15 L 65 19 L 60 17 L 55 19 L 57 15 L 54 12 L 58 10 Z" fill="url(#grad-warm)"/>'
            },
            {
                id: "reading-child",
                cls: "doodle-reading-child",
                viewBox: "0 0 100 110",
                style: "width: 100px; height: 110px;",
                html: '<circle cx="50" cy="30" r="9" fill="none" stroke="url(#grad-sky)" stroke-width="2.5"/><path d="M 50 39 L 50 68 M 50 48 Q 28 55, 33 72 M 50 48 Q 72 55, 67 72 M 50 68 L 38 90 M 50 68 L 62 90" fill="none" stroke="url(#grad-sky)" stroke-width="2.5" stroke-linecap="round"/><path d="M 33 72 Q 50 65, 67 72 L 72 65 Q 50 58, 28 65 Z" fill="none" stroke="url(#grad-sky)" stroke-width="2" stroke-linejoin="round"/>'
            },
            {
                id: "book-stack",
                cls: "doodle-book-stack",
                viewBox: "0 0 100 90",
                style: "width: 100px; height: 90px;",
                html: '<rect x="20" y="20" width="60" height="15" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><line x1="28" y1="20" x2="28" y2="35" stroke="url(#grad-warm)" stroke-width="2"/><rect x="15" y="40" width="70" height="15" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><line x1="25" y1="40" x2="25" y2="55" stroke="url(#grad-warm)" stroke-width="2"/><rect x="10" y="60" width="80" height="15" rx="2" fill="none" stroke="url(#grad-warm)" stroke-width="2.5"/><line x1="20" y1="60" x2="20" y2="75" stroke="url(#grad-warm)" stroke-width="2"/>'
            },
            {
                id: "lightbulb",
                cls: "doodle-lightbulb",
                viewBox: "0 0 100 110",
                style: "width: 100px; height: 110px;",
                html: '<path d="M 50 15 C 32 15, 32 45, 40 55 L 40 70 H 60 L 60 55 C 68 45, 68 15, 50 15 Z" fill="none" stroke="url(#grad-sunset)" stroke-width="2.5" stroke-linejoin="round"/><rect x="43" y="70" width="14" height="10" rx="1" fill="none" stroke="url(#grad-sunset)" stroke-width="2"/><path d="M 40 30 Q 50 35, 60 30 M 45 42 Q 50 45, 55 42 M 50 15 V 8" stroke="url(#grad-sunset)" stroke-width="2" stroke-linecap="round"/><path d="M 25 35 L 15 32 M 28 20 L 20 12 M 72 20 L 80 12 M 75 35 L 85 32" stroke="url(#grad-sunset)" stroke-width="2" stroke-linecap="round"/>'
            }
        ];

        // Generate a clean journey-based storytelling track of child development doodles along the page margins
        const generateMarginDoodles = () => {
            const container = document.querySelector('.margin-doodles-container');
            if (!container) return;
            container.innerHTML = '';

            const sections = [
                { 
                    id: 'books', 
                    items: [
                        { offset: 80, left: 'open-book', right: 'reading-child' },
                        { offset: 360, left: 'book-stack', right: 'lightbulb' }
                    ]
                },
                { id: 'about', left: 'solve-puzzle', right: 'catch' },
                { id: 'experience', left: 'phone', right: 'bicycle' },
                { id: 'education', left: 'reading-tree', right: 'graduate' },
                { id: 'publications', left: 'paper-plane', right: 'rocket' },
                { id: 'projects', left: 'nurture', right: 'reach' },
                { id: 'courses', left: 'stack-blocks', right: 'balloons' },
                { id: 'contact', left: 'mail', right: 'house-sun' }
            ];

            const bodyHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight
            );

            // Create a shared SVG for gradients definition
            const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgDefs.setAttribute('style', 'position: absolute; width: 0; height: 0; overflow: hidden;');
            svgDefs.innerHTML = `
                <defs>
                    <linearGradient id="grad-rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#EA4335" />
                        <stop offset="35%" stop-color="#FBBC05" />
                        <stop offset="70%" stop-color="#34A853" />
                        <stop offset="100%" stop-color="#4285F4" />
                    </linearGradient>
                    <linearGradient id="grad-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#4285F4" />
                        <stop offset="50%" stop-color="#00A896" />
                        <stop offset="100%" stop-color="#FBBC05" />
                    </linearGradient>
                    <linearGradient id="grad-sunset" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#7E57C2" />
                        <stop offset="50%" stop-color="#E1306C" />
                        <stop offset="100%" stop-color="#FF7F24" />
                    </linearGradient>
                    <linearGradient id="grad-growth" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stop-color="#34A853" />
                        <stop offset="100%" stop-color="#FBBC05" />
                    </linearGradient>
                    <linearGradient id="grad-warm" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#FF7F24" />
                        <stop offset="100%" stop-color="#FBBC05" />
                    </linearGradient>
                </defs>
            `;
            container.appendChild(svgDefs);

            const booksSection = document.getElementById('books');
            const startY = booksSection ? booksSection.offsetTop : 1450;
            const endY = bodyHeight - 650;

            // 0. Draw the continuous serpentine background roads (Left and Right margins)
            // Left Path SVG
            const leftPathSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            leftPathSvg.style.cssText = `position: absolute; left: 0; top: 0; width: 120px; height: ${bodyHeight}px; pointer-events: none; z-index: 1;`;
            let leftD = `M 40 ${startY}`;
            let yL = startY;
            let idxL = 0;
            while (yL < endY) {
                const nextY = yL + 120;
                const ctrlX = 40 + (idxL % 2 === 0 ? 20 : -20);
                leftD += ` Q ${ctrlX} ${yL + 60}, 40 ${nextY}`;
                yL = nextY;
                idxL++;
            }
            leftPathSvg.innerHTML = `<path d="${leftD}" fill="none" stroke="url(#grad-rainbow)" stroke-width="4.5" stroke-dasharray="10,10" stroke-linecap="round" opacity="0.45" />`;
            container.appendChild(leftPathSvg);

            // Right Path SVG
            const rightPathSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            rightPathSvg.style.cssText = `position: absolute; right: 0; top: 0; width: 120px; height: ${bodyHeight}px; pointer-events: none; z-index: 1;`;
            let rightD = `M 80 ${startY}`;
            let yR = startY;
            let idxR = 0;
            while (yR < endY) {
                const nextY = yR + 120;
                const ctrlX = 80 + (idxR % 2 === 0 ? -20 : 20);
                rightD += ` Q ${ctrlX} ${yR + 60}, 80 ${nextY}`;
                yR = nextY;
                idxR++;
            }
            rightPathSvg.innerHTML = `<path d="${rightD}" fill="none" stroke="url(#grad-rainbow)" stroke-width="4.5" stroke-dasharray="10,10" stroke-linecap="round" opacity="0.45" />`;
            container.appendChild(rightPathSvg);

            // 1. Place the main developmental milestones at their respective section heights
            const milestones = [];
            sections.forEach((sec) => {
                const el = document.getElementById(sec.id);
                if (!el) return;

                // Support multiple milestone items per section (e.g. books) or fallback to single
                const items = sec.items || [
                    { offset: 100, left: sec.left, right: sec.right }
                ];

                items.forEach((item) => {
                    const topY = el.offsetTop + item.offset;
                    const leftT = doodleTemplates.find(t => t.id === item.left);
                    const rightT = doodleTemplates.find(t => t.id === item.right);

                    if (leftT) {
                        milestones.push({
                            y: topY,
                            side: 'left',
                            html: leftT.html,
                            viewBox: leftT.viewBox,
                            cls: leftT.cls,
                            style: leftT.style
                        });
                    }
                    if (rightT) {
                        // Offset right slightly for a more dynamic journey feel, except for books
                        const rightOffset = (sec.id === 'books') ? 0 : 120;
                        milestones.push({
                            y: topY + rightOffset,
                            side: 'right',
                            html: rightT.html,
                            viewBox: rightT.viewBox,
                            cls: rightT.cls,
                            style: rightT.style
                        });
                    }
                });
            });

            // Append milestone drawings to the container
            milestones.forEach(m => {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('class', `margin-doodle ${m.cls}`);
                svg.setAttribute('viewBox', m.viewBox);
                svg.style.cssText = `top: ${m.y}px; ${m.side}: 2.5%; ${m.style}`;
                svg.innerHTML = m.html;
                container.appendChild(svg);
            });

            // 2. Generate footprints (left) and dotted trails (right) connecting the milestones
            const startYFoot = startY + 180;

            // Left side footprint steps representing a journey down the page
            let stepY = startYFoot;
            let stepIndex = 0;
            const footprintT = doodleTemplates.find(t => t.id === 'footprint');
            while (stepY < endY) {
                // Check that we aren't overlapping with any milestone drawing
                const nearMilestone = milestones.some(m => m.side === 'left' && Math.abs(m.y - stepY) < 140);
                if (!nearMilestone) {
                    const isLeftFoot = stepIndex % 2 === 0;
                    const offset = isLeftFoot ? '-10px' : '10px';
                    const rotation = isLeftFoot ? '-15deg' : '15deg';
                    const colorClass = `doodle-color-${stepIndex % 5}`;

                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('class', `margin-doodle doodle-footprint ${colorClass}`);
                    svg.setAttribute('viewBox', footprintT.viewBox);
                    svg.style.cssText = `top: ${stepY}px; left: calc(3% + ${offset}); transform: translateY(20px) rotate(${rotation}); width: 35px; height: 50px;`;
                    svg.innerHTML = footprintT.html;
                    container.appendChild(svg);
                }
                stepY += 150; // space steps evenly
                stepIndex++;
            }

            // Right side flight trails connecting right milestones
            stepY = startYFoot;
            stepIndex = 0;
            const trailT = doodleTemplates.find(t => t.id === 'trail');
            while (stepY < endY) {
                const nearMilestone = milestones.some(m => m.side === 'right' && Math.abs(m.y - stepY) < 165);
                if (!nearMilestone) {
                    const rotation = (stepIndex % 2 === 0) ? '-20deg' : '20deg';
                    const colorClass = `doodle-color-${stepIndex % 5}`;

                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svg.setAttribute('class', `margin-doodle doodle-trail ${colorClass}`);
                    svg.setAttribute('viewBox', trailT.viewBox);
                    svg.style.cssText = `top: ${stepY}px; right: 3%; transform: translateY(20px) rotate(${rotation}); width: 45px; height: 45px;`;
                    svg.innerHTML = trailT.html;
                    container.appendChild(svg);
                }
                stepY += 190;
                stepIndex++;
            }
        };

        // Populate dynamic journey milestones and trails
        generateMarginDoodles();

        // Individual elements to animate
        const individualElements = document.querySelectorAll(
            '.section-header, .about-text, .research-areas, .central-book-info, .wa-banner, .margin-doodle'
        );

        // Parent groups for staggered animation
        const staggerGroups = document.querySelectorAll(
            '.books-container, .timeline, .education-grid, .pub-list, .projects-grid, .courses-grid, .contact-grid, .area-tags'
        );

        // Add reveal class to individual elements
        individualElements.forEach(el => el.classList.add('reveal'));

        // Add reveal class to children of staggered groups
        staggerGroups.forEach(group => {
            Array.from(group.children).forEach(child => {
                child.classList.add('reveal');
            });
        });

        // Observer for individual elements
        const individualObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    individualObserver.unobserve(entry.target); // Animate once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        individualElements.forEach(el => individualObserver.observe(el));

        // Observer for staggered groups
        staggerGroups.forEach(group => {
            const children = Array.from(group.children);
            
            const groupObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        children.forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('visible');
                            }, index * 100); // 100ms delay between each item
                        });
                        groupObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            groupObserver.observe(group);
        });
    };

    initScrollReveal();

    // --- WhatsApp One-time Popup ---
    const waPopup = document.getElementById('waPopup');
    const waPopupClose = document.getElementById('waPopupClose');
    const WA_POPUP_KEY = 'wa_popup_shown_v1';

    if (waPopup && !localStorage.getItem(WA_POPUP_KEY)) {
        // Show after 3 seconds
        const showTimer = setTimeout(() => {
            waPopup.classList.add('wa-popup--visible');

            // Auto-dismiss after 8 seconds
            const hideTimer = setTimeout(() => {
                dismissWaPopup();
            }, 8000);

            // Store timer ref for close button
            waPopup._hideTimer = hideTimer;
        }, 3000);

        function dismissWaPopup() {
            waPopup.classList.remove('wa-popup--visible');
            localStorage.setItem(WA_POPUP_KEY, 'true');
            if (waPopup._hideTimer) clearTimeout(waPopup._hideTimer);
        }

        if (waPopupClose) {
            waPopupClose.addEventListener('click', dismissWaPopup);
        }
    }

    // --- Hide Floating WhatsApp in Contact Section ---
    const contactSection = document.getElementById('contact');
    const waBtn = document.getElementById('waBtn');
    
    if (contactSection && waBtn) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Contact section is visible, hide floating button
                    waBtn.style.opacity = '0';
                    waBtn.style.pointerEvents = 'none';
                    waBtn.style.transform = 'translateY(20px)';
                } else {
                    // Contact section is out of view, show floating button
                    waBtn.style.opacity = '1';
                    waBtn.style.pointerEvents = 'auto';
                    waBtn.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of contact section is visible
        });

        contactObserver.observe(contactSection);
        
        // Ensure transition on floating button for smooth hide/show
        waBtn.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    // --- Wikipedia Modal Logic ---
    const wikiModal = document.getElementById('wikiModal');
    const wikiModalOverlay = document.getElementById('wikiModalOverlay');
    const wikiModalClose = document.getElementById('wikiModalClose');
    const wikiContent = document.getElementById('wikiContent');
    const wikiTitle = document.getElementById('wikiTitle');
    const wikiReadMore = document.getElementById('wikiReadMore');
    const courseChips = document.querySelectorAll('.course-chip, .wiki-trigger');

    if (wikiModal && courseChips.length > 0) {
        const closeWikiModal = () => {
            wikiModal.classList.remove('active');
            setTimeout(() => {
                wikiContent.innerHTML = ''; // Clear after fade out
            }, 300);
        };

        wikiModalClose.addEventListener('click', closeWikiModal);
        wikiModalOverlay.addEventListener('click', closeWikiModal);

        courseChips.forEach(chip => {
            chip.addEventListener('click', async () => {
                const wikiTerm = chip.getAttribute('data-wiki');
                const courseName = chip.textContent;

                if (!wikiTerm) return;

                const normalizedCourse = courseName.replace(/\s+/g, ' ').trim();

                // Show modal and loading state
                wikiTitle.textContent = courseName;
                wikiReadMore.style.display = 'none'; // hide link while loading
                wikiContent.innerHTML = `
                    <div class="wiki-loading">
                        <div class="wiki-skeleton title"></div>
                        <div class="wiki-skeleton line-1"></div>
                        <div class="wiki-skeleton line-2"></div>
                        <div class="wiki-skeleton line-3"></div>
                    </div>
                `;
                wikiModal.classList.add('active');

                const isEn = window.I18N && window.I18N.currentLocale === 'en';
                const wikiSubdomain = isEn ? 'en' : 'tr';
                const activeTerm = (isEn && chip.getAttribute('data-wiki-en')) ? chip.getAttribute('data-wiki-en') : wikiTerm;

                // Define local manual summaries for specific courses (bilingual support)
                const localSummaries = {
                    "Özel Eğitimde Değerlendirme ve BEP": {
                        html: "<p><strong>Özel Eğitimde Değerlendirme ve BEP</strong>, özel gereksinimli bireylerin eğitsel performans düzeylerini belirleme ve bu doğrultuda kişiselleştirilmiş hedeflere ulaşmalarını sağlayan eğitsel planlama sürecini kapsar. Değerlendirme aşamasında standartlaştırılmış testler, gözlemler ve ölçüt bağımlı testler kullanılarak bireyin güçlü ve zayıf yönleri analiz edilir. Elde edilen veriler doğrultusunda hazırlanan Bireyselleştirilmiş Eğitim Programı (BEP); öğrencinin alacağı destek hizmetleri, uzun ve kısa dönemli hedefleri ve bu hedeflere ulaşmak için kullanılacak öğretim yöntem ve materyallerini belirleyen yasal bir belgedir.</p>",
                        url: "https://tr.wikipedia.org/wiki/Bireyselle%C5%9Ftirilmi%C5%9F_e%C4%9Fitim_program%C4%B1"
                    },
                    "Assessment in Special Education & IEP": {
                        html: "<p><strong>Assessment in Special Education and IEP</strong> encompasses the educational planning process that determines the performance levels of individuals with special needs and enables them to achieve personalized educational goals. Through standardized tests, clinical observations, and criterion-referenced assessments, the individual's strengths and needs are evaluated. The resulting Individualized Education Program (IEP) is a formal plan specifying support services, annual goals, short-term objectives, and tailored instructional strategies.</p>",
                        url: "https://en.wikipedia.org/wiki/Individualized_Education_Program"
                    },
                    "Zihin Yetersizliğinde Öğretim Uyarlamaları": {
                        html: "<p><strong>Zihin Yetersizliğinde Öğretim Uyarlamaları</strong>, zihinsel yetersizliği olan öğrencilerin müfredata erişimini ve akademik başarılarını artırmak amacıyla öğretimsel süreçlerde yapılan düzenlemeleri ifade eder. Bu uyarlamalar; içeriğin basitleştirilmesi, öğretim hızının ayarlanması, görsel ve somut materyal desteği sağlanması, ipuçlarının aşamalı olarak sunulması ve hata analizine dayalı geri bildirim süreçlerini içerir. Amaç, öğrencinin bilişsel kapasitesine uygun, bağımsız işlevde bulunmasını destekleyici ve motivasyonu artırıcı akran temelli veya bireysel öğrenme ortamları sunmaktır.</p>",
                        url: "https://tr.wikipedia.org/wiki/Zihinsel_engelli"
                    },
                    "Instructional Adaptations in Intellectual Disabilities": {
                        html: "<p><strong>Instructional Adaptations in Intellectual Disabilities</strong> refers to pedagogical and environmental modifications designed to facilitate curriculum access and academic success for students with intellectual disabilities. These adaptations include content simplification, pacing adjustments, multi-sensory concrete supports, systematic prompting, and error-analytic feedback to support independent functioning and peer-inclusive learning.</p>",
                        url: "https://en.wikipedia.org/wiki/Intellectual_disability"
                    },
                    "Özel Eğitim ve Kaynaştırma": {
                        html: "<p><strong>Özel Eğitim ve Kaynaştırma</strong>, özel gereksinimli öğrencilerin akranlarıyla birlikte genel eğitim sınıflarında destek hizmetler sunularak eğitilmesini öngören çağdaş bir eğitim yaklaşımıdır. Bu süreç, sadece fiziksel olarak aynı ortamda bulunmayı değil; sosyal, akademik ve eğitsel anlamda tam bir bütünleşmeyi hedefler. Kaynaştırma/bütünleştirme uygulamalarının başarısı için sınıf içi fiziksel çevre düzenlemeleri, müfredat uyarlamaları, iş birliği ve destek özel eğitim öğretmenliği gibi hizmetlerin koordineli bir şekilde yürütülmesi esastır.</p>",
                        url: "https://tr.wikipedia.org/wiki/Kayna%C5%9Ft%C4%B1rma_e%C4%9Fitimi"
                    },
                    "Special Education and Inclusion": {
                        html: "<p><strong>Special Education and Inclusion</strong> is a contemporary educational philosophy that integrates students with disabilities into general education classrooms with appropriate supplementary aids and services. It promotes full social, academic, and behavioral participation, requiring collaborative teaching, adapted curricula, and universal design for learning.</p>",
                        url: "https://en.wikipedia.org/wiki/Inclusion_(education)"
                    }
                };

                if (localSummaries[normalizedCourse]) {
                    const localData = localSummaries[normalizedCourse];
                    setTimeout(() => {
                        wikiContent.innerHTML = localData.html;
                        wikiReadMore.href = localData.url;
                        wikiReadMore.style.display = 'inline-flex';
                    }, 300);
                    return;
                }

                try {
                    const response = await fetch(`https://${wikiSubdomain}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(activeTerm)}`);
                    
                    if (!response.ok) {
                        throw new Error('Wikipedia page not found.');
                    }

                    const data = await response.json();

                    // Inject content
                    if (data.extract_html) {
                        wikiContent.innerHTML = data.extract_html;
                    } else {
                        const notFoundMsg = window.I18N ? window.I18N.t('modals.wiki_not_found') : 'Bu konu hakkında Vikipedi özeti bulunamadı.';
                        wikiContent.innerHTML = `<p>${notFoundMsg}</p>`;
                    }

                    // Setup read more link
                    if (data.content_urls && data.content_urls.desktop) {
                        wikiReadMore.href = data.content_urls.desktop.page;
                        wikiReadMore.style.display = 'inline-flex';
                    }

                } catch (error) {
                    const errTitle = window.I18N ? window.I18N.t('modals.wiki_error_title') : 'Bilgi alınamadı.';
                    const errDesc = window.I18N ? window.I18N.t('modals.wiki_error_desc', { topic: courseName }) : `Şu an için "${courseName}" hakkında Vikipedi verisine ulaşılamıyor veya bağlantı hatası oluştu.`;
                    wikiContent.innerHTML = `
                        <p style="color: var(--clr-accent);">
                            <strong>${errTitle}</strong><br>
                            ${errDesc}
                        </p>
                    `;
                    wikiReadMore.href = `https://${wikiSubdomain}.wikipedia.org/w/index.php?search=${encodeURIComponent(activeTerm)}`;
                    wikiReadMore.style.display = 'inline-flex';
                }
            });
        });
    }
    // --- Publications Modal Logic ---
    const pubsModal = document.getElementById('pubsModal');
    const openPubsBtn = document.getElementById('openPubsModal');
    const pubsModalClose = document.getElementById('pubsModalClose');
    const pubsModalOverlay = document.getElementById('pubsModalOverlay');

    if (pubsModal && openPubsBtn) {
        const closePubsModal = () => {
            pubsModal.classList.remove('active');
        };

        openPubsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pubsModal.classList.add('active');
        });

        if (pubsModalClose) pubsModalClose.addEventListener('click', closePubsModal);
        if (pubsModalOverlay) pubsModalOverlay.addEventListener('click', closePubsModal);
    } // ADDED THIS MISSING BRACE!

    // --- Certificates Modal Logic ---
    const certModal = document.getElementById('certModal');
    const certModalClose = document.getElementById('certModalClose');
    const certModalOverlay = document.getElementById('certModalOverlay');
    const certModalContent = document.getElementById('certModalContent');
    const viewCertBtns = document.querySelectorAll('.view-cert-btn');

    if (certModal && viewCertBtns.length > 0) {
        const closeCertModal = () => {
            certModal.classList.remove('active');
        };

        const openCertModal = (certType) => {
            // In the future, we can load different images based on certType
            // For now, it's just the placeholder or the RUBI certificate
            certModalContent.innerHTML = `
                <div class="cert-placeholder">
                    RUBI Certificate Placeholder
                </div>
            `;
            certModal.classList.add('active');
        };

        viewCertBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const certType = btn.getAttribute('data-cert');
                openCertModal(certType);
            });
        });

        if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
        if (certModalOverlay) certModalOverlay.addEventListener('click', closeCertModal);
    }

    // --- Project Modals Logic ---
    const projectCards = document.querySelectorAll('.featured-card[data-project]');
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const project = card.getAttribute('data-project');
            let modalId = '';
            if (project === 'odkaep') modalId = 'projectModalOdkaep';
            else if (project === 'ias') modalId = 'projectModalIas';
            else if (project === 'ozredep') modalId = 'projectModalOzredep';
            else if (project === 'rubi') modalId = 'projectModalRubi';
            
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                
                // Set up close triggers if not already set
                const closeBtn = modal.querySelector('.wiki-modal-close');
                const overlay = modal.querySelector('.wiki-modal-overlay');
                
                const closeModal = () => {
                    modal.classList.remove('active');
                };
                
                if (closeBtn && !closeBtn.dataset.hasListener) {
                    closeBtn.addEventListener('click', closeModal);
                    closeBtn.dataset.hasListener = 'true';
                }
                if (overlay && !overlay.dataset.hasListener) {
                    overlay.addEventListener('click', closeModal);
                    overlay.dataset.hasListener = 'true';
                }
            }
        });
    });

    // Global Escape key handler for all modals (Accessibility requirement)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const certM = document.getElementById('certModal');
            if (certM && certM.classList.contains('active')) {
                certM.classList.remove('active');
            }
            const wikiM = document.getElementById('wikiModal');
            if (wikiM && wikiM.classList.contains('active')) {
                wikiM.classList.remove('active');
                const wikiC = document.getElementById('wikiContent');
                setTimeout(() => {
                    if (wikiC) wikiC.innerHTML = '';
                }, 300);
            }
            const pubsM = document.getElementById('pubsModal');
            if (pubsM && pubsM.classList.contains('active')) {
                pubsM.classList.remove('active');
            }
            // Project Modals
            ['projectModalOdkaep', 'projectModalIas', 'projectModalOzredep', 'projectModalRubi'].forEach(id => {
                const pm = document.getElementById(id);
                if (pm && pm.classList.contains('active')) {
                    pm.classList.remove('active');
                }
            });
        }
    });
});

// Centralized Book Info Hover & Touch/Click Logic
document.addEventListener('DOMContentLoaded', () => {
    const bookWrappers = document.querySelectorAll('.book-wrapper');
    const centralInfo = document.getElementById('central-book-info');
    
    if (centralInfo && bookWrappers.length > 0) {
        const centralTitle = centralInfo.querySelector('.central-book-title');
        const centralDesc = centralInfo.querySelector('.central-book-desc');
        
        // Save default text
        const defaultTitle = centralTitle ? centralTitle.innerHTML : '';
        const defaultDesc = centralDesc ? centralDesc.innerHTML : '';
        
        const getCentralDefaultTitle = () => window.I18N ? window.I18N.t('books.default_title') : (defaultTitle || 'Bir kitap seçin');
        const getCentralDefaultDesc = () => window.I18N ? window.I18N.t('books.default_desc') : (defaultDesc || 'Yayın detaylarını görmek için yukarıdaki kitaplardan birinin üzerine gelin.');
        const getCentralLinkHtml = () => (window.I18N ? window.I18N.t('books.central_link') : 'Kitabı İncele') + ' <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';

        let hoverTimeout;

        // Create or find a link element inside centralInfo
        let centralLink = centralInfo.querySelector('.central-book-link');
        if (!centralLink) {
            centralLink = document.createElement('a');
            centralLink.className = 'central-book-link';
            centralLink.target = '_blank';
            centralLink.innerHTML = getCentralLinkHtml();
            centralInfo.appendChild(centralLink);
        }

        const updateCentralInfo = (wrapper) => {
            const titleEl = wrapper.querySelector('.book-info-title');
            const descEl = wrapper.querySelector('.book-info-desc');
            const mockupEl = wrapper.querySelector('.book-mockup');
            
            if (titleEl && centralTitle) centralTitle.innerHTML = titleEl.innerHTML;
            if (descEl && centralDesc) centralDesc.innerHTML = descEl.innerHTML;
            
            if (mockupEl && centralLink) {
                centralLink.href = mockupEl.getAttribute('href');
                centralLink.classList.add('visible');
            }
            centralInfo.classList.add('active');
        };

        const resetCentralInfo = () => {
            if (centralTitle) centralTitle.innerHTML = getCentralDefaultTitle();
            if (centralDesc) centralDesc.innerHTML = getCentralDefaultDesc();
            if (centralLink) {
                centralLink.classList.remove('visible');
                centralLink.href = '#';
                centralLink.innerHTML = getCentralLinkHtml();
            }
            centralInfo.classList.remove('active');
        };

        window.addEventListener('i18n:localeChanged', () => {
            if (!centralInfo.classList.contains('active')) {
                resetCentralInfo();
            } else if (centralLink) {
                centralLink.innerHTML = getCentralLinkHtml();
            }
        });

        bookWrappers.forEach(wrapper => {
            // Hover logic (Desktop)
            wrapper.addEventListener('mouseenter', () => {
                // Only use hover logic if user is not on a touch device
                if (window.matchMedia('(hover: hover)').matches) {
                    clearTimeout(hoverTimeout);
                    bookWrappers.forEach(w => w.classList.remove('selected'));
                    updateCentralInfo(wrapper);
                }
            });
            
            wrapper.addEventListener('mouseleave', () => {
                if (window.matchMedia('(hover: hover)').matches) {
                    hoverTimeout = setTimeout(() => {
                        const anySelected = Array.from(bookWrappers).some(w => w.classList.contains('selected'));
                        if (!anySelected) {
                            resetCentralInfo();
                        }
                    }, 10000);
                }
            });

            // Tap/Click logic (Mobile & Desktop enhancement)
            const mockupLink = wrapper.querySelector('.book-mockup');
            if (mockupLink) {
                mockupLink.addEventListener('click', (e) => {
                    const isSelected = wrapper.classList.contains('selected');
                    
                    // If not selected yet, select it and show info, prevent immediate redirect
                    if (!isSelected) {
                        e.preventDefault();
                        bookWrappers.forEach(w => w.classList.remove('selected'));
                        wrapper.classList.add('selected');
                        updateCentralInfo(wrapper);
                        
                        // Scroll the selected book into view inside the slider
                        wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                    // If already selected, we let the default link click go through
                });
            }
        });

        // Close details if clicking outside the books section
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#books')) {
                bookWrappers.forEach(w => w.classList.remove('selected'));
                resetCentralInfo();
            }
        });
    }
});



// --- Research Projects Details Accordion ---
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const btn = card.querySelector('.project-detail-btn');
        const content = card.querySelector('.project-details-expanded');
        if (btn && content) {
            btn.addEventListener('click', () => {
                const isExpanded = card.classList.contains('expanded');
                
                // Toggle state
                card.classList.toggle('expanded');
                btn.setAttribute('aria-expanded', !isExpanded);
                
                // Toggle max-height for smooth accordion transition
                if (isExpanded) {
                    content.style.maxHeight = '0px';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
                
                // Toggle text content
                const btnText = btn.querySelector('span');
                if (btnText) {
                    const viewDetailsText = window.I18N ? window.I18N.t('projects.view_details') : 'Detayları Gör';
                    const hideDetailsText = window.I18N ? window.I18N.t('projects.hide_details') : 'Detayları Kapat';
                    btnText.textContent = isExpanded ? viewDetailsText : hideDetailsText;
                }
            });
            
            // Adjust max-height on window resize if expanded
            window.addEventListener('resize', () => {
                if (card.classList.contains('expanded')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });

    window.addEventListener('i18n:localeChanged', () => {
        const projectCards = document.querySelectorAll('.research-project-card');
        projectCards.forEach(card => {
            const btn = card.querySelector('.project-details-btn');
            const btnText = btn ? btn.querySelector('span') : null;
            if (btnText && window.I18N) {
                const isExpanded = card.classList.contains('expanded');
                btnText.textContent = isExpanded ? window.I18N.t('projects.hide_details') : window.I18N.t('projects.view_details');
            }
        });
    });
});

// Books slider navigation logic
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.books-container');
    const prevBtn = document.querySelector('.books-slider-btn.prev');
    const nextBtn = document.querySelector('.books-slider-btn.next');

    if (container && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            // Scroll left by the container's visible width
            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            // Scroll right by the container's visible width
            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        const toggleButtons = () => {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            if (scrollLeft <= 5) {
                prevBtn.style.opacity = '0.3';
                prevBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }

            if (scrollLeft >= maxScroll - 5) {
                nextBtn.style.opacity = '0.3';
                nextBtn.style.pointerEvents = 'none';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        };

        // Initialize state
        setTimeout(toggleButtons, 150);

        // Update state on scroll
        container.addEventListener('scroll', toggleButtons);
        window.addEventListener('resize', toggleButtons);
    }
});

// Centralized Modal Body Scroll Lock using MutationObserver
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.wiki-modal');
    if (modals.length > 0) {
        const updateBodyScroll = () => {
            const anyActive = Array.from(modals).some(m => m.classList.contains('active'));
            if (anyActive) {
                document.body.classList.add('modal-open');
            } else {
                document.body.classList.remove('modal-open');
            }
        };

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    updateBodyScroll();
                }
            });
        });

        modals.forEach(modal => {
            observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
        });

        // Run initial check
        updateBodyScroll();
    }
});

