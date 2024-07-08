import Typed from 'typed.js';

export default () => {
  let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 30, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 30, // Скорость удаления

    fadeOut: true,
    showCursor: false,

    loop: true // Указываем, повторять ли анимацию
  });
}
