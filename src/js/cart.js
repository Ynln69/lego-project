// Функція для додавання товару до корзини і збереження в localStorage
export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Отримуємо корзину з localStorage або створюємо нову
    const existingProduct = cart.find(item => item.id === product.id); 
  
    if (existingProduct) {
      // Якщо товар вже є в корзині, збільшуємо його кількість
      existingProduct.quantity += 1;
    } else {
      // Якщо товар новий, додаємо його до корзини з кількістю 1
      cart.push({
        id: product.id,
        title: product.title,
        photo: product.photo,
        price: product.price, // Якщо є поле price
        quantity: 1
      });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart)); // Зберігаємо оновлену корзину у localStorage
    alert(`${product.title} було додано до корзини!`);
  }
  
  // Функція для відображення елементів корзини на сторінці корзини
  export function renderCartItems() {
    const cartList = document.getElementById('cart-items');
    
    // Перевіряємо, чи існує корзина на сторінці
    if (!cartList) {
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Очищуємо список перед додаванням нових елементів
    cartList.innerHTML = '';
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${item.photo}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>numer: ${item.quantity}</p>
        <p>cena: ${item.price} PLN</p>
      `;
      cartList.appendChild(li);
    });
  }
  
  // Викликаємо функцію renderCartItems лише на сторінці корзини
  document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
  });
  