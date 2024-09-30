import { addToCart } from './cart';

// Завантажуємо продукти і додаємо логіку для кнопок "Додати до корзини"
fetch('./data/products-data.json')
  .then(response => response.json())
  .then(data => {
    const productsList = document.getElementById('our-products');

    data.products.forEach(product => {
      const li = document.createElement('li');
      li.classList.add('our-products-item', 'products-home-item');

      li.innerHTML = `
        <a href="../product-page.html?id=${product.id}">
        <img src="${product.photo}" alt="${product.title}" class="products-item-img">
        <div class="products-item-thumb">
          <h3 class="products-item-title">${product.title}</h3>
          <p class="products-item-desk">${product.description}</p>
        </div>
        </a>
        <button type="button" class="basket-btn" data-id="${product.id}">${product.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
          </button>
      `;
      productsList.appendChild(li);

      // Додаємо обробник події для кнопки "Додати до корзини"
      li.querySelector('.basket-btn').addEventListener('click', () => {
        addToCart(product);
      });
    });
  })
  .catch(error => console.error('Помилка при завантаженні JSON:', error));
