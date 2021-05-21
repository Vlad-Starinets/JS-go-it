function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  firstArray.forEach(firstArray => {
      if (secondArray.includes(firstArray)) {
        commonElements.push(firstArray);
      }
    }
  );
    return commonElements;
    // Пиши код выше этой строки
  }