export default () => {
  let menuBtn = document.querySelector('.header__btn')

  document.querySelectorAll('a.nav__list-link').forEach(link => {
    link.addEventListener('click', function (e) {


      if (this.closest(".main-menu")) {
        this.closest(".main-menu").classList.remove('active');

        const body = document.querySelector("body");
        menuBtn.classList.toggle('active');
        body.classList.remove("disable-scroll");
      }

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget != null)
      {
        e.preventDefault();

        const topOffset = -10;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  })
}
