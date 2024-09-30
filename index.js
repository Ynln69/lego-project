import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import"./assets/our-products-D29wU1Yv.js";import"./assets/cart-CkPm__2z.js";const c=[{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"},{title:"Назва сертифікату",description:"Опис товару",price:"500  PLN",button:"w koszyku"}],o={certificates:c};fetch(o).then(t=>t.json()).then(t=>{const s=document.getElementById("certificates-list");t.certificates.forEach(i=>{const e=document.createElement("li");e.classList.add("certificates-item"),e.innerHTML=`
      <h3 class="certificates-item-title">${i.title}</h3>
        <div class="certificates-item-thumb">
          <p class="certificates-item-price">${i.price}</p>
          <p class="certificates-item-desk">${i.description}</p>
        </div>
        <button type="button" class="basket-btn">${i.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
        </button>
      `,s.appendChild(e)})}).catch(t=>console.error("Помилка при завантаженні JSON:",t));
//# sourceMappingURL=index.js.map
