// Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.

let input;
let total = 0;
while (input !== null) {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    alert(`Введите число пожалуйста`);
  } else {
    total = total + Number(input);
  }
}
alert(`Общая сумма чисел ${total}`);
