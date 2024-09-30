(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(t){if(t.ep)return;t.ep=!0;const c=e(t);fetch(t.href,c)}})();fetch("./data/products-data.json").then(s=>s.json()).then(s=>{const o=document.getElementById("our-products");s.products.forEach(e=>{const i=document.createElement("li");i.classList.add("our-products-item","products-home-item"),i.innerHTML=`
        <a href="../pages/product-page.html?id=${e.id}">
        <img src="${e.photo}" alt="${e.title}" class="products-item-img" >
        <div class="products-item-thumb">
          <h3 class="products-item-title">${e.title}</h3>
          <p class="products-item-desk">${e.description}</p>
          <button type="button" class="basket-btn">${e.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
        </button>
        </div>
        </a>
      `,o.appendChild(i)})}).catch(s=>console.error("Помилка при завантаженні JSON:",s));fetch("./data/certificates-data.json").then(s=>s.json()).then(s=>{const o=document.getElementById("certificates-list");s.certificates.forEach(e=>{const i=document.createElement("li");i.classList.add("certificates-item"),i.classList.add("certificates-home-item"),i.innerHTML=`
      <h3 class="certificates-item-title">${e.title}</h3>
        <div class="certificates-item-thumb">
          <p class="certificates-item-price">${e.price}</p>
          <p class="certificates-item-desk">${e.description}</p>
        </div>
        <button type="button" class="basket-btn">${e.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
        </button>
      `,o.appendChild(i)})}).catch(s=>console.error("Помилка при завантаженні JSON:",s));
//# sourceMappingURL=index.js.map
