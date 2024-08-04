


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.getElementById('cart-icon');
  const cartCount = document.getElementById('cart-count');
  const cart = [];
  
  document.querySelectorAll('.buy').forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault();
          const product = button.closest('.preview');
          const productName = product.querySelector('h3').textContent;
          const productPrice = product.querySelector('.price').textContent;
          const productData = {
              name: productName,
              price: productPrice
          };
          cart.push(productData);
          cartCount.textContent = cart.length;
          alert(`${productName} telah ditambahkan ke keranjang`);
      });
  });
  
  // Event listener for opening product preview
  document.querySelectorAll('.product').forEach(product => {
      product.addEventListener('click', () => {
          const productName = product.getAttribute('data-name');
          const productPreview = document.querySelector(`.preview[data-target="${productName}"]`);
          document.querySelector('.products-preview').style.display = 'flex';
          productPreview.style.display = 'block';
      });
  });
  
  // Event listener for closing product preview
  document.querySelectorAll('.preview .fa-times').forEach(closeIcon => {
      closeIcon.addEventListener('click', () => {
          closeIcon.closest('.preview').style.display = 'none';
          document.querySelector('.products-preview').style.display = 'none';
      });
  });
});


// Function to add item to cart
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(product => product.id === productId);

  // Check if product is already in the cart
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
     existingProduct.quantity += 1;
  } else {
     cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Produk berhasil ditambahkan ke keranjang!');
}

// Example product data
const products = [
  { id: 'p-1', name: 'Laptop', price: 5500000 },
  { id: 'p-2', name: 'Komputer', price: 15000000 },
  { id: 'p-3', name: 'Kulkas 2 Pintu', price: 7000000 },
  { id: 'p-4', name: 'TV LED', price: 5320000 },
  { id: 'p-5', name: 'Handphone', price: 4500000 },
  { id: 'p-6', name: 'Printer', price: 2320000 },
  { id: 'p-7', name: 'Mesin Cuci', price: 4120000 }
];

// Event listener for add to cart buttons
document.querySelectorAll('.buy').forEach(button => {
  button.addEventListener('click', (event) => {
     event.preventDefault(); // Prevent default anchor behavior
     const productId = button.parentElement.parentElement.dataset.target;
     addToCart(productId);
  });
});



previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


