function Storage (items) {
    this.items = items;
    }
    
    Storage.prototype.getItems = function getItems() {
    return this.items;
    }
    
    Storage.prototype.addItem = function addItem(newItem) {
    return this.items.push(newItem);
    }
    
    Storage.prototype.removeItem = function removeItem(item) {
    return this.items.splice(1, 1);
    }
    
    // Пиши код выше этой строки
    const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
    console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
    storage.addItem('Дроид');
    console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
    storage.removeItem('Пролонгер');
    console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]