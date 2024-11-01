export default () => {
  const items = document.querySelectorAll('.cube-tariff__item');


  items.forEach(item => {
    const switcher = item.querySelector('.switcher');
    const checkbox = switcher.querySelector('input');
    const tariffSum = switcher.nextElementSibling.dataset.price;
    let total = item.querySelector('.cube-tariff__item-price-elem span');

    let basePrice = total.textContent;
    /*if (item.classList.contains('cube-tariff__item--colm-2')) {
      basePrice = item.querySelector('.cube-tariff__item-price-crossed span').textContent;
    }*/

    checkbox.addEventListener('input', () => {
      if (checkbox.checked) {
        total.innerHTML = parseInt(basePrice) + 100;
        /*if (item.classList.contains('cube-tariff__item--colm-2')) {
          item.querySelector('.cube-tariff__item-price-crossed').style.display = 'none';
        }*/
      } else {
        total.innerHTML = parseInt(tariffSum);
        /*if (item.classList.contains('cube-tariff__item--colm-2')) {
          item.querySelector('.cube-tariff__item-price-crossed').style.display = 'block';
        }*/
      }
    });
  })
}
