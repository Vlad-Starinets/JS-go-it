const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    // Пиши код ниже этой строки 
    let total = [];
  
    for (const product of products) {
      for (const prop in product) {
      if (propName === prop) {
        total.push(product[prop]);
    }
    }
    }
    return total;
    // Пиши код выше этой строки
  }
  