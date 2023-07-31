// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import menuBtn from './modules/menu-btn';
import validation from './modules/validation';
import Accordions from './modules/Accordions';
import phoneMask from './modules/inputMask';
import swiperWorkedBetter from './modules/SwiperWorkedBetter';
import swiperTariffs from './modules/swiperTariffs';
import articlesSwiper from './modules/articlesSwiper';
import introSwiperImg from './modules/introSwiperImg';

documenReady(() => {
  window.batc_API = {};


  lazyIMages();
  initModal();
  menuBtn();
  validation();
  accordion();
  phoneMask();
  swiperWorkedBetter();
  swiperTariffs();
  articlesSwiper();
  introSwiperImg();
});

function accordion() {

  if (!document.querySelector(".js-accordions")) return;

  new Accordions({
    selectors: {
      container: '.js-accordions',
      wrapper: '.js-accordion',
      button: '.js-accordion-btn',
      content: '.js-accordion-content'
    }
  });
}
