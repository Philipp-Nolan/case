const day = +prompt('Введите количество дней ');
const numOne = +prompt('Введите первое число !');
const numSecond = +prompt('Введите второе число !');
const calculation = +prompt(
  'Выберите математическую операцию ! \n 1 - Сложение(+) \n 2 - Вычитание(-) \n 3 - Деление(/) \n 4 - Умножение(*) \n 5 - Возведение в степень(**) \n 6 - Возвращает квадратный корень числа (Вводите только первое число!)',
);

switch ((numOne, numSecond, calculation)) {
  case 1: {
    console.log(numOne + numSecond);
    break;
  }
  case 2: {
    console.log(numOne - numSecond);
    break;
  }
  case 3: {
    console.log(numOne / numSecond);
    break;
  }
  case 4: {
    console.log(numOne * numSecond);
    break;
  }
  case 5: {
    console.log(numOne ** numSecond);
    break;
  }
  case 6: {
    console.log(Math.sqrt(numOne));
    break;
  }
}

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10: {
    console.log('Первая декада');
    break;
  }
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20: {
    console.log('Вторая декада');
    break;
  }
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30: {
    console.log('Третья декада');
    break;
  }
}
