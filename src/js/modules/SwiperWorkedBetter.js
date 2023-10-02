import Swiper, {
  Navigation,
  Pagination
} from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default function swiperWorkedBetter() {

  const body = document.querySelector('body');
  if (body.classList.contains('is-admin')) {
    return;
  }

  const sliders = document.querySelectorAll('.worked-better__swiper-wrapper');

  sliders.forEach(slider => {

    new Swiper(slider.querySelector('.worked-better__swiper'), {
      // loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 30,
      // autoHeight: true,
      navigation: {
        nextEl: slider.querySelector('.worked-better__swiper-navigation-next'),
        prevEl: slider.querySelector('.worked-better__swiper-navigation-prev')
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}
