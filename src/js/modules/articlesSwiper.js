import Swiper, {
  Navigation
} from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function () {

  const body = document.querySelector('body');
  if (body.classList.contains('is-admin')) {
    return;
  }

  const sliders = document.querySelectorAll('.articles__swiper-wrapper');

  sliders.forEach(slider => {

    new Swiper(slider.querySelector('.articles__swiper'), {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      navigation: {
        nextEl: slider.querySelector('.articles__swiper-navigation-next'),
        prevEl: slider.querySelector('.articles__swiper-navigation-prev')
      },
      breakpoints: {
        764: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  });
}
