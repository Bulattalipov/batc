export default () => {
  let menuBtn = document.querySelector('.header__btn');
  let mainMenu = document.querySelector('.main-menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  })
}
