let cart = [];

function addToCart(product, price) {
    const item = { product, price };
    cart.push(item);
    alert(`${product} has been added to the cart.`);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price}`;
        cartElement.appendChild(listItem);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${totalPrice}`;
    cartElement.appendChild(totalElement);
}

function showServiceDetails(serviceType) {
    let serviceDetails = '';
    switch (serviceType) {
        case 'computer':
            serviceDetails = `
                <h2>Service Komputer</h2>
                <p>Kami memperbaiki berbagai kerusakan pada komputer termasuk kerusakan hardware dan software.</p>
                <ul>
                    <li>Ganti motherboard</li>
                    <li>Perbaikan power supply</li>
                    <li>Instalasi ulang sistem operasi</li>
                </ul>
            `;
            break;
        case 'laptop':
            serviceDetails = `
                <h2>Service Laptop</h2>
                <p>Kami memperbaiki berbagai kerusakan pada laptop termasuk kerusakan layar dan keyboard.</p>
                <ul>
                    <li>Ganti layar</li>
                    <li>Perbaikan keyboard</li>
                    <li>Perbaikan baterai</li>
                </ul>
            `;
            break;
        case 'tv':
            serviceDetails = `
                <h2>Service Lainnya</h2>
                <p>Kami juga menyediakan layanan servis untuk perangkat elektronik lainnya.</p>
                <ul>
                    <li>Perbaikan TV</li>
                    <li>Perbaikan speaker</li>
                    <li>Perbaikan perangkat rumah tangga elektronik lainnya</li>
                </ul>
            `;
            case 'Kulkas':
            serviceDetails = `
                <h2>Service Komputer</h2>
                <p>Kami memperbaiki berbagai kerusakan pada komputer termasuk kerusakan hardware dan software.</p>
                <ul>
                    <li>Ganti motherboard</li>
                    <li>Perbaikan power supply</li>
                    <li>Instalasi ulang sistem operasi</li>
                </ul>
            `;
            case 'Strika':
            serviceDetails = `
                <h2>Service Komputer</h2>
                <p>Kami memperbaiki berbagai kerusakan pada komputer termasuk kerusakan hardware dan software.</p>
                <ul>
                    <li>Ganti motherboard</li>
                    <li>Perbaikan power supply</li>
                    <li>Instalasi ulang sistem operasi</li>
                </ul>
            `;
            break;
        default:
            serviceDetails = '<p>Service tidak ditemukan.</p>';
    }
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = serviceDetails;
}

function placeOrder() {
    const installationOption = confirm("Apakah Anda ingin sekalian melakukan pemasangan?");
    if (installationOption) {
        alert("Order placed with installation.");
    } else {
        alert("Order placed without installation.");
    }
    cart = [];
    updateCart();
}

document.getElementById('serviceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const item = document.getElementById('item').value;
    const issue = document.getElementById('issue').value;
    const date = document.getElementById('date').value;
    
    alert(`Pesanan Anda telah diterima:
    Nama: ${name}
    Alamat: ${address}
    Barang: ${item}
    Masalah: ${issue}
    Tanggal: ${date}`);
});
