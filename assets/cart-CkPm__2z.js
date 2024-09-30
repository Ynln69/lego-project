function r(t){let n=JSON.parse(localStorage.getItem("cart"))||[];const e=n.find(a=>a.id===t.id);e?e.quantity+=1:n.push({id:t.id,title:t.title,photo:t.photo,price:t.price,quantity:1}),localStorage.setItem("cart",JSON.stringify(n)),alert(`${t.title} було додано до корзини!`)}function i(){const t=document.getElementById("cart-items");if(!t)return;const n=JSON.parse(localStorage.getItem("cart"))||[];t.innerHTML="",n.forEach(e=>{const a=document.createElement("li");a.innerHTML=`
        <img src="${e.photo}" alt="${e.title}">
        <h3>${e.title}</h3>
        <p>numer: ${e.quantity}</p>
        <p>cena: ${e.price} PLN</p>
      `,t.appendChild(a)})}document.addEventListener("DOMContentLoaded",()=>{i()});export{r as a};
//# sourceMappingURL=cart-CkPm__2z.js.map
