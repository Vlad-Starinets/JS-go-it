function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
  const values = Object.values(salaries);
    for (const value of values) {
    totalSalary += value;
    }
    // Пиши код выше этой строки
    return totalSalary;
  }