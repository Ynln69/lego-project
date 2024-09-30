// Отримуємо параметр id з URL

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Завантажуємо дані з JSON-файлу
fetch('../../data/products-data.json')
  .then(response => response.json())
  .then(data => {
    // Знаходимо продукт за id
    const product = data.products.find(p => p.id == productId);

    if (product) {
      // Відображаємо деталі продукту
      document.getElementById('product-image').src = product.photo;
      document.getElementById('product-price').textContent = `${product.price} PLN`;
      document.getElementById('product-title').textContent = product.title;
      document.getElementById('product-description').textContent = product.description;
    } else {
      console.error('Продукт не знайдено');
    }
  })
  .catch(error => console.error('Помилка при завантаженні JSON:', error));
