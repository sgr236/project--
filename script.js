let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

document.addEventListener('DOMContentLoaded', displayCart);
