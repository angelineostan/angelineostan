document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        // Toggle slide-in
        mobileMenu.classList.toggle('translate-x-full');
        
        // Toggle icons
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');

        // Scroll Lock: VERY IMPORTANT
        if (!mobileMenu.classList.contains('translate-x-full')) {
            // Menu is open
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            // Menu is closed
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Auto-close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        });
    });
});