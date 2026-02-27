import { products } from "../data/products.js";
import { cart, updateCartQuantity, removeFromCart, increaseQuantity, decreaseQuantity } from "../data/cart.js";

export function renderCart() {

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
                    <button class="decrease-quantity w-8 text-2xl cursor-pointer bg-transparent" data-product-id="${matchingProduct.id}">-</button>
                    <span class="flex items-center justify-center w-10 border-0 border-l-2 border-r-2 border-gray-200">${cartItem.quantity}</span>
                    <button class="increase-quantity w-8 text-2xl cursor-pointer bg-transparent" data-product-id="${matchingProduct.id}">+</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-link size-6 cursor-pointer" data-product-id="${matchingProduct.id}">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </div>
        `;
    });
    
    document.querySelector('.cart-container').innerHTML = cartSummaryHTML;

    document.querySelectorAll('.delete-link').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            updateCartQuantity();
            renderCart();
            calculateCartTotal();
    
            const container = document.querySelector(`#js-item-container-${productId}`);
            container.remove();
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            decreaseQuantity(productId);
            updateCartQuantity();
            renderCart();
            calculateCartTotal();
        });
    });
    document.querySelectorAll('.increase-quantity').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            increaseQuantity(productId);
            updateCartQuantity();
            renderCart();
            calculateCartTotal();
        });
    });
}

export function calculateCartTotal() {
    let total = 0;

    cart.forEach((cartItem) => {
        let matchingProduct;

        products.forEach((product) => {
            if (product.id === cartItem.productId) {
                matchingProduct = product;
            }
        });

        total += matchingProduct.price * cartItem.quantity;
    });
    document.querySelector('#cart-total-price').innerHTML = total
}
renderCart();
calculateCartTotal();