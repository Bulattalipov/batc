import Swiper, {} from "swiper/swiper-bundle";

Swiper.use([]);

export default function () {
  const sliders = document.querySelectorAll('.intro__swiper');

  sliders.forEach(slider => {

    new Swiper(slider, {
      loop: true,
      speed: 500,
      autoplay: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 0,
    });
  });
}
