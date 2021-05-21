const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Пиши код ниже этой строки
  
    let total;
    
    for (const product of products) {
      if (productName === product.name) {
        return total = (product.price * product.quantity);
      }
    }
     return total = 0;
        
  
  
    // Пиши код выше этой строки
  }
  