import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

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

// ADD TO CART //
document.querySelectorAll('#add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
    });
});
