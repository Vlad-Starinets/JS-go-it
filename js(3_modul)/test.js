function filterArray(numbers, value) {
    // Пиши код ниже этой строки
  const newMassive = [];
  
  for (let i = 0; i < numbers; i += 1) {
    if (numbers[i] > value) {
      newMassive.push(numbers[i]);
    }
  }
    return newMassive;
  
    // Пиши код выше этой строки
  }