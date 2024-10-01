import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{a as e}from"./assets/cart-count-Bzsmujp2.js";const n=new URLSearchParams(window.location.search),r=n.get("id");fetch("../../data/products-data.json").then(o=>o.json()).then(o=>{const t=o.products.find(c=>c.id==r);if(t){const c=`
          <div>
            <img src="${t.photo}" alt="${t.title}" class="product-image" />
          </div>
          <div class="product-info">
            <h2 class="product-info-title">${t.title}</h2>
            <p class="product-info-price">${t.price} PLN</p>
            <p class="product-info-description">${t.description}</p>
            <button type="button" class="basket-btn" data-id="${t.id}">${t.button}
              <svg width="16" height="16">
                  <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
              </svg>
            </button>
          </div>
      `;document.getElementById("product-container").innerHTML=c,document.querySelector(".basket-btn").addEventListener("click",()=>{e(t)})}else console.error("Продукт не знайдено")}).catch(o=>console.error("Помилка при завантаженні JSON:",o));
//# sourceMappingURL=product-page.js.map
