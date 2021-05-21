// Пиши код ниже этой строки
function findMatches(firstArg, ...args) {
    const matches = []; // Не изменяй эту строку
  
    for (const arg of args) {
      if (firstArg.includes(arg)) {
          matches.push(arg);
    }
  }
    
    
    // Пиши код выше этой строки
    return matches;
  }
  