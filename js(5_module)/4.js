function Car({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })