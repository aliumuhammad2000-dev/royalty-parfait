const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Cart SideView //
const cartIcon = document.getElementById('cart-icon');
const cartSide = document.getElementById('cart-side');
const cartIconClose = document.getElementById('cart-icon-close');

cartIcon.addEventListener('click', () => {
    cartSide.classList.toggle("hidden");
});
cartIconClose.addEventListener('click', () => {
    cartSide.classList.toggle("hidden");
});

// Add To Cart //
let productsHTML = '';
products.forEach((products) => {
    productsHTML += `
    <div class="card">
      <div class="aspect-square w-full">
        <img class="w-full h-full object-cover" src="${products.image}" alt="strawberry & blueberry">
      </div>
      <div class="flex flex-col grow p-5 text-center">
        <p class="text-sm font-serif font-medium tracking-tighter uppercase min-h-3.5 line-clamp-2">${products.name}}</p>
        <div class="mt-auto pt-6">
          <span class="block font-medium"> &#8358;${products.price}</span>
          <button class="text-sm bg-gray-600 px-3 py-1.5 text-white rounded-full mt-4 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-700" id="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
    `
});

document.querySelector('#js-products').innerHTML = productsHTML;



