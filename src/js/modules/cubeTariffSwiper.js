import Swiper, {
  Navigation,
  Pagination
} from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default () => {
  if (window.matchMedia('(max-width: 1199px)').matches) {
    const slider = document.querySelector(".cube-tariff__swiper");

    new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      // centeredSlides: true,
      navigation: {
        nextEl: slider.querySelector('.swiper-navigation__prev'),
        prevEl: slider.querySelector('.swiper-navigation__next')
      },
      breakpoints: {
        // when window width is >= 320px
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }
    });
  }
}
