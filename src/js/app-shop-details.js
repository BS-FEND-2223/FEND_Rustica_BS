import "../css/main.css"

const appContainer = document.querySelector('#app-shop-detail');

async function fetchProductsDetail() {
    const response = await fetch("./shop-details.json");
    const products = await response.json();
    
    const productsHtml = products.map((product)=> {
        const productHtml =
            <article class="products">
                <div class="products_container">
                    <img class="product_image" src="../images/FEND_Coffee_Costa_Rica_2.png" alt="Produktfoto des Kaffees">
                </div>
                <p class="p">
                    ${product.productName}
                </p>
                <p class="p">${(products.price * 0,01).toFixed(2) + (" €")}</p>
            
            </article>
    })

}