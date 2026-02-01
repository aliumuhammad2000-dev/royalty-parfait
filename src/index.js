const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

const cartIcon = document.getElementById('cart-icon');
const cartSide = document.getElementById('cart-side');
const cartIconClose = document.getElementById('cart-icon-close');

cartIcon.addEventListener('click', () => {
    cartSide.classList.toggle("hidden");
});
cartIconClose.addEventListener('click', () => {
    cartSide.classList.toggle("hidden");
});
