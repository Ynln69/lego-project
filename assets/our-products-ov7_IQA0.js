import{a as h}from"./cart-count-Bzsmujp2.js";const d=6;let o=1;fetch("./data/products-data.json").then(n=>n.json()).then(n=>{const r=document.getElementById("our-products"),l=document.getElementById("pagination"),p=window.location.pathname.includes("index.html"),u=p?n.products.slice(0,3):n.products;function c(a){r.innerHTML="";const e=(a-1)*d,s=e+d;u.slice(e,s).forEach(t=>{const i=document.createElement("li");i.classList.add("our-products-item"),i.innerHTML=`
          <a href="../product-page.html?id=${t.id}">
          <img src="${t.photo}" alt="${t.title}" class="products-item-img">
          <div class="products-item-thumb">
            <h3 class="products-item-title">${t.title}</h3>
            <p class="products-item-desk">${t.description}</p>
          </div>
          </a>
          <div class="products-item-wrapper">
            <p class="products-item-price">${t.price}PLN</P>
             <button type="button" class="basket-btn" data-id="${t.id}">${t.button}
              <svg width="16" height="16">
                  <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
              </svg>
            </button>
          </div>
        `,r.appendChild(i),i.querySelector(".basket-btn").addEventListener("click",()=>{h(t)})})}function m(){l.innerHTML="";const a=Math.ceil(u.length/d);for(let e=1;e<=a;e++){const s=document.createElement("button");s.innerText=e,s.classList.add("pagination-button"),e===o&&s.classList.add("active"),s.addEventListener("click",()=>{o=e,c(o),m()}),l.appendChild(s)}}p?c(1):(c(o),m())}).catch(n=>console.error("Помилка при завантаженні JSON:",n));
//# sourceMappingURL=our-products-ov7_IQA0.js.map
