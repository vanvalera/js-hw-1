// На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

// При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:
const credits = 23580;
const pricePerDroid = 3000;
let quantityDroids = prompt('Сколько дроидов хотите купить?');
while (!/^\d+$/.test(quantityDroids)) {
  quantityDroids = prompt('Введите число, используя только цифры:');
}
let totalPrice;
if (quantityDroids === null) {
  alert('Отменено пользоваталем');
} else if (quantityDroids <= 0) {
  alert('Введите положительное количество дроидов');
} else {
  totalPrice = pricePerDroid * quantityDroids;
  if (totalPrice > credits) {
    alert(
      `Недостаточно средств на счету! Вам нехватает ${
        totalPrice - credits
      } кредитов`,
    );
  } else
    alert(
      `Вы купили ${quantityDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов`,
    );
}
