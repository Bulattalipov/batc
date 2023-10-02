export default () => {
  let body = document.querySelector('body');
  let menuBtn = document.querySelector('.header__btn');
  let mainMenu = document.querySelector('.main-menu');
  let mainMenuBtns = mainMenu.querySelectorAll(".nav__list-link");

  menuBtn.addEventListener('click', function () {
    // body.classList.toggle('disable-scroll');
    menuBtn.classList.toggle('active');
    mainMenu.classList.toggle('active');
  })

  // mainMenuBtns.forEach(item => {
  //   item.addEventListener('click', () => {
  //     body.classList.toggle('disable-scroll');
  //     menuBtn.classList.toggle('active');
  //     mainMenu.classList.toggle('active');
  //   })
  // })
}
