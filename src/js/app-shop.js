const appContainer = document.querySelector("#app-shop");

async function fetchProducts() {
    const response = await fetch("../js/products.json");
    const products = await response.json();
    const productsHtml = products
        .map((products)=> {
        const productsHtml = `
        <div>
            <a class="shop-elements" href="./shop.html?id=${products.id}"></a>
                <article>
                <h3 class="title--blue">${products.productName}</h3>
                <p class="text--red">${products.short}</p>
                <img src="">
                <span>
                <p class="p">Preis pro Packung: ${(products.price * 0.01).toFixed(2) + (" €")}</p>
                </span>
                </article>
        </div>
            `;
        return productsHtml;
        }).join("");

    console.log(productsHtml);
    appContainer.innerHTML = productsHtml;
    console.log(appContainer.innerHTML)
    }

fetchProducts()
