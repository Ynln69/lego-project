import{a as o}from"./cart-CkPm__2z.js";fetch("./data/products-data.json").then(e=>e.json()).then(e=>{const i=document.getElementById("our-products");e.products.forEach(t=>{const s=document.createElement("li");s.classList.add("our-products-item","products-home-item"),s.innerHTML=`
        <a href="../product-page.html?id=${t.id}">
        <img src="${t.photo}" alt="${t.title}" class="products-item-img">
        <div class="products-item-thumb">
          <h3 class="products-item-title">${t.title}</h3>
          <p class="products-item-desk">${t.description}</p>
        </div>
        </a>
        <button type="button" class="basket-btn" data-id="${t.id}">${t.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
          </button>
      `,i.appendChild(s),s.querySelector(".basket-btn").addEventListener("click",()=>{o(t)})})}).catch(e=>console.error("Помилка при завантаженні JSON:",e));
//# sourceMappingURL=our-products-D29wU1Yv.js.map
