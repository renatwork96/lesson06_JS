'use strict';

let game = function() {

  let conceivedNumber = Math.floor(Math.random( ) * 100) + 1;
  console.log(conceivedNumber);

  let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let guessNumber = function() {
    let number = prompt('Угадайе число от 1 до 100');

    if ( isNumber(number) ) {
      if (number > conceivedNumber) {
        alert('Загаданное число меньше');
        guessNumber();
      } else if (number < conceivedNumber) {
        alert('Загаданное число больше');
        guessNumber();
      } else if (number === conceivedNumber) {
        return alert('Поздравляю, Вы угадали!');
      } 
    } else if (number === null) {
      alert('Игра окончена');
      return;
    } else {
      alert('Введите число!');
      guessNumber();
    }
  };

  guessNumber();
};

game();