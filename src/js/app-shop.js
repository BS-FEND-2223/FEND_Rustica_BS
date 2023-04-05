const appContainer = document.querySelector("#app-shop");

async function fetchProducts() {
    const response = await fetch("../js/products.json");
    const products = await response.json();
    const productsHtml = products
        .map((products)=> {
        const productsHtml = `
        <a class="shop-elements" href="./shop.html?id=${products.id}">
            <article>
            <h3 class"title--blue">${products.productName}</h3>
            <p>${products.producteName}</p>
            <img src="">
            <span>${products.productPrice}</span>
            </article>
        </a>
            `;
        return productsHtml;
        }).join("");

    console.log(productsHtml);
    appContainer.innerHtml = productsHtml;
    }

fetchProducts()
