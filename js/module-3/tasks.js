// (1) Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i] 
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([4, 16, 24, 36, 44, 56]));

// **--------------------------** //

// (2) Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//  const numbers = [];
//   for (let i = start; i <= end; i++) {
//     if (!(i % 2)) {
//       numbers.push(i);
//     // } else {
//     //   return [];
//     }
//   } 
//    return numbers;
// }

// console.log(getEvenNumbers(2, 5));  
// console.log(getEvenNumbers(3, 11));  
// console.log(getEvenNumbers(6, 12));  
// console.log(getEvenNumbers(8, 8));  
// console.log(getEvenNumbers(7, 7)); 

// **-----------------------** ///

// (3) Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   item = item.toLowerCase();
//   if (storage.includes(item)) {
//     return `${item} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum")); //"plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //"plum is available to order!")
// console.log(checkStorage(["apple", "plum", "pear"], "pear")); //"pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //"pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange")); //"Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //"Sorry! We are out of stock!"

// **-----------------------** //

// (4) Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3]
// спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2)
// довільної довжини в якості параметрів.

// Доповни код функції:
// Створи порожній масив для зберігання нового масиву. +
// Використай цикл for для ітерації кожного елемента у array1. +
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

function getCommonElements(array1, array2) {
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i]);
   if (array2.includes(array1[i]))  
   array3.push(array1[i])
  }
  return array3
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає[];


// **-----------------** //
// (5) Доповни код функції calculateTotalPrice(order) так,
// щоб вона повертала загальну суму чисел в масиві order.
// Використай цикл for...of для перебору масиву.


// function calculateTotalPrice(order) {
// let sum = 0;
//   for(const element of order){
//     // console.log(element);
//     sum += element;  
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// console.log(calculateTotalPrice([])); // повертає 0