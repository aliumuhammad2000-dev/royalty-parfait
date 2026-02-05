import { products } from "../data/products.js";
import { cart, addToCart, removeFromCart } from "../data/cart.js";

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

let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="card">
      <div class="aspect-square w-full">
        <img class="w-full h-full object-cover" src="${product.image}" alt="strawberry & blueberry">
      </div>
      <div class="flex flex-col grow p-5 text-center">
        <p class="text-sm font-serif font-medium tracking-tighter uppercase min-h-3.5 line-clamp-2">${product.name}</p>
        <div class="mt-auto pt-6">
          <span class="block font-medium"> &#8358;${product.price}</span>
          <button class="text-sm bg-gray-600 px-3 py-1.5 text-white rounded-full mt-4 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-700" id="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    </div>
    `
});

document.querySelector('#js-products').innerHTML = productsHTML;

function updateCartQuantity () {
    let cartQuantity = 0;

        cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        
        const badge = document.getElementById('js-cart-quantity');
        document.querySelector('#js-cart-quantity').innerHTML = cartQuantity;

        if (cartQuantity > 0) {
            badge.classList.remove('hidden');
        }
}

// ADD TO CART //
document.querySelectorAll('#add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
    });
});
let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="flex items-center mt-5" id="js-item-container-${matchingProduct.id}">
        <img class="w-32 h-32 object-cover rounded-2xl mr-5" src="${matchingProduct.image}" alt="">
        <div class="grid gap-2 mr-auto">
            <h2 class="text-sm font-medium leading-relaxed">${matchingProduct.name}</h2>
            <span class="font-bold">&#8358;${matchingProduct.price}</span>
            <div class="flex w-24 border border-gray-200 rounded-sm">
                <button class="w-8 text-2xl cursor-pointer bg-transparent">-</button>
                <span class="flex items-center justify-center w-10 border-0 border-l-2 border-r-2 border-gray-200">${cartItem.quantity}</span>
                <button class="w-8 text-2xl cursor-pointer bg-transparent">+</button>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer" id="delete-link" data-product-id="${matchingProduct.id}">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
    </div>
    `;
});

document.querySelector('.cart-container').innerHTML = cartSummaryHTML;

// REMOVE FROM CART //
document.querySelectorAll('#delete-link').forEach ((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`#js-item-container-${productId}`);
        container.remove();
    });
});