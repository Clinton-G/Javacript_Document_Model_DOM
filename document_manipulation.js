let products = [
    { name: "Laptop", price: 999.99, description: "Powerful Work Laptop" },
    { name: "Smartphone", price: 699.99, description: "Top of the Line Flagship Device" },
    { name: "Headphones", price: 149.99, description: "High End Sound Cancellation to Help You Focus" }
];

function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        const description = document.createElement('p');
        description.textContent = product.description;

        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(description);

        productsContainer.appendChild(productDiv);
    });
}

window.addEventListener('load', () => {
    displayProducts(products);
});

