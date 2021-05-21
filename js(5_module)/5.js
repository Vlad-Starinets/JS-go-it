function Car({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  Car.prototype.getPrice = function getPrice() {
    return this.price
  }
  
  Car.prototype.changePrice = function changePrice(newPrice){
  return this.price = newPrice
  }