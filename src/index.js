const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

