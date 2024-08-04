// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
 
    if (cart.length === 0) {
       cartContainer.innerHTML = '<p>Keranjang Anda kosong</p>';
    } else {
       cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
             <h3>${item.name}</h3>
             <p>Harga: Rp.${item.price}</p>
             <p>Jumlah: ${item.quantity}</p>
             <button class="remove" data-id="${item.id}">Hapus</button>
          `;
          cartContainer.appendChild(cartItem);
       });
    }
 
    document.querySelectorAll('.remove').forEach(button => {
       button.addEventListener('click', () => {
          const productId = button.dataset.id;
          removeFromCart(productId);
       });
    });
 });
 
 function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
 }
 