function r(t){let a=JSON.parse(localStorage.getItem("cart"))||[];const e=a.find(n=>n.id===t.id);e?e.quantity+=1:a.push({id:t.id,title:t.title,photo:t.photo,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(a)),alert(`${t.title} було додано до корзини!`)}function c(){const t=document.getElementById("cart-list");if(!t)return;const a=JSON.parse(localStorage.getItem("cart"))||[];t.innerHTML="",a.forEach(e=>{const n=document.createElement("li");n.classList.add("cart-item"),n.innerHTML=`
        <img src="${e.photo}" alt="${e.title}" class="cart-img">
        <div>
          <h3 class="cart-title">${e.title}</h3>
          <p>${e.quantity}</p>
        </div>
      `,t.appendChild(n)})}document.addEventListener("DOMContentLoaded",()=>{c()});function o(){const a=(JSON.parse(localStorage.getItem("cart"))||[]).reduce((n,i)=>n+i.quantity,0),e=document.getElementById("cart-count");e.textContent=a}document.addEventListener("DOMContentLoaded",()=>{o(),c()});export{r as a};
//# sourceMappingURL=cart-count-Bzsmujp2.js.map
