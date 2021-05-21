const atTheOldToad = {
    potions: [
      { name: 'Зелье скорости', price: 460 },
      { name: 'Дыхание дракона', price: 780 },
      { name: 'Каменная кожа', price: 520 },
    ],
    // Пиши код ниже этой строки
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
    const {name,price} =potionName;
      for(const potion of this.potions){
        if(potion.name===name){
          return `Зелье ${name} уже есть в инвентаре!`;
        };
      };
      this.potions.push(potionName);
    },
    removePotion(potionName) {
    for(let i=0;i<this.potions.length; i+=1){
      if(this.potions[i].name===potionName){
      this.potions.splice(i,1);
        return ;
      };
    };
      return `Зелья ${potionName} нет в инвентаре!`;
    },
    updatePotionName(oldName, newName) {
    for(let potion of this.potions){
    if(potion.name===oldName){
    potion.name=newName;
      return this.potions;
    };
    };
      return `Зелья ${oldName} нет в инвентаре!`;
    },
    // Пиши код выше этой строки
  };
  