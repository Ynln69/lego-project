import { v4 as uuidv4 } from 'uuid';

// Функція для завантаження даних з JSON
fetch('./data/products-data.json')
  .then(response => response.json())
  .then(data => {
    const productsList = document.getElementById('our-products');

    data.products.forEach(product => {
      const li = document.createElement('li');
      li.classList.add('our-products-item', 'products-home-item');

      li.innerHTML = `
        <a href="../pages/product-page.html?id=${product.id}">
        <img src="${product.photo}" alt="${product.title}" class="products-item-img" >
        <div class="products-item-thumb">
          <h3 class="products-item-title">${product.title}</h3>
          <p class="products-item-desk">${product.description}</p>
          <button type="button" class="basket-btn">${product.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
        </button>
        </div>
        </a>
      `;
      productsList.appendChild(li);
    });
  })
  .catch(error => console.error('Помилка при завантаженні JSON:', error)); // Обробка помилок
