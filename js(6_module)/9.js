function changeEven(numbers, value) {
    const newArray = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
         newArray.push(number + value)  
        }
      else {
          newArray.push(number);
        }
      });
    return newArray;
}

 const numbers = [1, 2, 3, 4, 5];

 const double = changeEven(numbers, 10);

 console.log(numbers);
 console.log(double)