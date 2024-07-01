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
import rangeSlider from './modules/rangeSlider';
import calculator, {
  openCloseBlock
} from './modules/calculator';
import openHiddenItem from './modules/openHiddenItem';
import smoothScroll from './modules/smoothScroll';
import {
  getHeaderHeight
} from './modules/header-height';
import addingFoodQuantity from './modules/addingFoodQuantity';
import tariffSwiper from './modules/cubeTariffSwiper';
import typed from './modules/typed';

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
  rangeSlider();
  calculator();
  openHiddenItem();
  openCloseBlock();
  smoothScroll();
  getHeaderHeight();
  addingFoodQuantity();
  tariffSwiper();
  typed();
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
