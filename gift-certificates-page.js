import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */fetch("./data/certificates-data.json").then(t=>t.json()).then(t=>{const s=document.getElementById("certificates-list");t.certificates.forEach(e=>{const i=document.createElement("li");i.classList.add("certificates-item"),i.innerHTML=`
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
      `,s.appendChild(i)})}).catch(t=>console.error("Помилка при завантаженні JSON:",t));
//# sourceMappingURL=gift-certificates-page.js.map
