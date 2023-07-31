import Swiper, {
  Navigation,
  Pagination
} from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default function () {
  if (window.matchMedia('(max-width: 1200px)').matches) {
    const sliders = document.querySelectorAll('.tariffs__swiper');

    sliders.forEach(slider => {

      new Swiper(slider, {
        // loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 20,
        // autoHeight: true,
        navigation: {
          nextEl: slider.querySelector('.tariffs__swiper-navigation-next'),
          prevEl: slider.querySelector('.tariffs__swiper-navigation-prev')
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          998: {
            slidesPerView: 2,
          },
        },
      });
    });
  }

}
